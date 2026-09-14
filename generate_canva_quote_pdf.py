import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#8C827A"))
        
        # Top rule on page 2
        if self._pageNumber > 1:
            self.setStrokeColor(colors.HexColor("#E5DDD6"))
            self.setLineWidth(0.5)
            self.line(40, letter[1] - 35, letter[0] - 40, letter[1] - 35)
            self.drawString(40, letter[1] - 30, "BANWA — Landing Page Project Quote (Canva Edition • Ref: BNW-2026-011)")
            self.drawRightString(letter[0] - 40, letter[1] - 30, "Confidential Proposal")

        # Bottom footer on all pages
        self.setStrokeColor(colors.HexColor("#E5DDD6"))
        self.setLineWidth(0.5)
        self.line(40, 38, letter[0] - 40, 38)
        self.drawString(40, 26, "Banwa Landing Page Quote (Canva No-Code) • Prepared by Jireh Tumbagahan")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 40, 26, page_str)
        self.restoreState()

def create_canva_quote_pdf(filename="Banwa_Canva_Project_Quote.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=42,
        bottomMargin=48
    )

    PRIMARY = colors.HexColor("#8B3A22")       # Terracotta
    PRIMARY_LIGHT = colors.HexColor("#FBF5F1") # Very subtle terracotta tint
    DARK = colors.HexColor("#201A18")          # Rich Charcoal
    MUTED = colors.HexColor("#6B6562")         # Slate / Warm Gray
    BORDER = colors.HexColor("#E5DDD6")        # Soft border
    CARD_BG = colors.HexColor("#FAF7F4")       # Warm light card background
    WHITE = colors.HexColor("#FFFFFF")

    # Typography
    style_logo_title = ParagraphStyle('LogoTitle', fontName='Helvetica-Bold', fontSize=26, leading=28, textColor=PRIMARY)
    style_quote_title = ParagraphStyle('QuoteTitle', fontName='Helvetica-Bold', fontSize=20, leading=22, textColor=DARK, alignment=2)
    style_quote_meta = ParagraphStyle('QuoteMeta', fontName='Helvetica', fontSize=8.5, leading=12, textColor=MUTED, alignment=2)
    
    style_meta_label = ParagraphStyle('MetaLabel', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=PRIMARY)
    style_meta_val = ParagraphStyle('MetaVal', fontName='Helvetica', fontSize=8.5, leading=12, textColor=DARK)
    style_sec_head = ParagraphStyle('SecHead', fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=PRIMARY)
    
    style_body = ParagraphStyle('Body', fontName='Helvetica', fontSize=8.5, leading=12.5, textColor=DARK)
    style_body_bold = ParagraphStyle('BodyBold', fontName='Helvetica-Bold', fontSize=8.5, leading=12.5, textColor=DARK)
    style_body_muted = ParagraphStyle('BodyMuted', fontName='Helvetica', fontSize=7.8, leading=11, textColor=MUTED)
    
    style_table_header = ParagraphStyle('TableHead', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE)
    style_table_header_center = ParagraphStyle('TableHeadCenter', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE, alignment=1)
    style_table_header_right = ParagraphStyle('TableHeadRight', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE, alignment=2)

    story = []

    # ==========================================
    # PAGE 1: HEADER, PARTIES, OVERVIEW, SCOPE, TOTAL
    # ==========================================

    # 1. Header (Clean BANWA text)
    brand_header_cell = [
        Paragraph("<b>BANWA</b>", style_logo_title),
    ]

    quote_meta_cell = [
        Paragraph("<b>PROJECT QUOTE</b>", style_quote_title),
        Spacer(1, 4),
        Paragraph("<b>Quote Ref:</b> BNW-2026-011<br/><b>Option:</b> Canva No-Code Edition<br/><b>Date:</b> September 14, 2026<br/><b>Validity:</b> 30 Days (Until Oct 14, 2026)", style_quote_meta)
    ]

    header_table = Table([[brand_header_cell, quote_meta_cell]], colWidths=[270, 262])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(header_table)
    story.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceBefore=4, spaceAfter=12))

    # 2. Parties Card
    client_content = [
        Paragraph("<b>PREPARED FOR</b>", style_meta_label),
        Spacer(1, 3),
        Paragraph("<b>Laurence Cylde Moreno, Alyssa Moreno, & Dhanielle Sim</b>", style_body_bold),
        Spacer(1, 2),
        Paragraph("Project: Official Landing Page (Canva Edition)", style_body),
        Paragraph("Client: Banwa", style_body_muted),
    ]
    provider_content = [
        Paragraph("<b>PREPARED BY</b>", style_meta_label),
        Spacer(1, 3),
        Paragraph("<b>Jireh Tumbagahan</b>", style_body_bold),
        Spacer(1, 2),
        Paragraph("Email: jirehtumbagahan@gmail.com", style_body),
        Paragraph("Platform: Canva (Client Pro Workspace)", style_body_muted),
    ]

    parties_table = Table([[client_content, provider_content]], colWidths=[260, 260])
    parties_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 9),
        ('BOTTOMPADDING', (0,0), (-1,-1), 9),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(parties_table)
    story.append(Spacer(1, 12))

    # 3. Project Overview
    story.append(Paragraph("<b>1. Project Overview & Objectives (No-Code Package)</b>", style_sec_head))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "This project quote covers the visual design, layout setup, and publishing of an official landing page for "
        "<b>Banwa</b> built using the <b>Canva Website Builder</b>. Developed within the client's Canva Pro environment, "
        "this no-code alternative delivers a cost-effective, visually cohesive digital presence for Banwa that is quick to launch "
        "and easy for the client team to edit independently using Canva's intuitive visual editor.",
        style_body
    ))
    story.append(Spacer(1, 12))

    # 4. Scope of Work Table (Specific to Canva No-Code - Updated Pricing)
    story.append(Paragraph("<b>2. Scope of Work & Deliverables</b>", style_sec_head))
    story.append(Spacer(1, 5))

    items = [
        [
            Paragraph("<b>Deliverable & Description</b>", style_table_header),
            Paragraph("<b>Timeline</b>", style_table_header_center),
            Paragraph("<b>Amount</b>", style_table_header_right)
        ],
        [
            Paragraph("<b>Canva Landing Page UI/UX & Visual Layout</b><br/>"
                      "<font color='#6B6562'>Design and assembly of the Banwa landing page within the Canva Website Builder. "
                      "Includes brand styling, curated typography, hero presentation, brand story sections, "
                      "mission and vision, and testimonials layout.</font>", style_body),
            Paragraph("Milestone 1", ParagraphStyle('C1', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 3,500.00", ParagraphStyle('A1', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Mobile Responsiveness & Navigation Link Setup</b><br/>"
                      "<font color='#6B6562'>Adjustment of Canva's layout for readable desktop and mobile viewing. "
                      "Configuration of page section navigation anchors, call-to-action buttons, and inquiry contact links "
                      "(e.g. direct email or external messaging links).</font>", style_body),
            Paragraph("Milestone 1", ParagraphStyle('C2', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,000.00", ParagraphStyle('A2', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Canva Publishing & Editable Template Handover</b><br/>"
                      "<font color='#6B6562'>Live website publishing through Canva hosting, DNS setup guidance for custom domain "
                      "connection, and full transfer of the editable Canva project template link so the client can update text and images independently.</font>", style_body),
            Paragraph("Milestone 2", ParagraphStyle('C3', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,000.00", ParagraphStyle('A3', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
    ]

    deliverables_table = Table(items, colWidths=[356, 76, 100])
    deliverables_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, CARD_BG]),
    ]))
    story.append(deliverables_table)
    story.append(Spacer(1, 12))

    # 5. Total Investment Box (Subtotal: PHP 5,500.00, Adjustment: Flat-Rate Startup Package Adjustment)
    total_data = [
        [
            Paragraph("<b>Subtotal (Canva Landing Page Design & Setup)</b>", style_body),
            Paragraph("PHP 5,500.00", ParagraphStyle('T1', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Flat-Rate Startup Package Adjustment</b>", style_body_muted),
            Paragraph("PHP 0.00", ParagraphStyle('T2', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2))
        ],
        [
            Paragraph("<b>TOTAL PROJECT INVESTMENT</b>", ParagraphStyle('TotalLabel', fontName='Helvetica-Bold', fontSize=10, textColor=PRIMARY)),
            Paragraph("<b>PHP 5,500.00</b>", ParagraphStyle('TotalVal', fontName='Helvetica-Bold', fontSize=11, textColor=PRIMARY, alignment=2))
        ],
    ]
    total_table = Table(total_data, colWidths=[376, 156])
    total_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('LINEBELOW', (0,0), (-1,-2), 0.5, BORDER),
        ('BACKGROUND', (0,-1), (-1,-1), PRIMARY_LIGHT),
        ('BOX', (0,-1), (-1,-1), 1, PRIMARY),
    ]))
    story.append(total_table)

    # ==========================================
    # PAGE 2: MILESTONES, TECH STACK, TERMS, SIGN-OFF
    # ==========================================
    story.append(PageBreak())

    story.append(Spacer(1, 10))
    story.append(Paragraph("<b>3. Payment Schedule & Milestones</b>", style_sec_head))
    story.append(Spacer(1, 5))

    milestone_data = [
        [
            Paragraph("<b>Milestone</b>", style_table_header),
            Paragraph("<b>Split</b>", style_table_header_center),
            Paragraph("<b>Trigger Condition & Deliverable</b>", style_table_header),
            Paragraph("<b>Amount (PHP)</b>", style_table_header_right)
        ],
        [
            Paragraph("<b>Milestone 1:<br/>Project Deposit</b>", style_body_bold),
            Paragraph("50%", ParagraphStyle('M1', fontName='Helvetica-Bold', fontSize=8.5, textColor=DARK, alignment=1)),
            Paragraph("Due upon agreement to initiate Canva workspace layout, color theme, typography, and section design.", style_body),
            Paragraph("<b>PHP 2,750.00</b>", ParagraphStyle('MA1', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, alignment=2))
        ],
        [
            Paragraph("<b>Milestone 2:<br/>Final Handover</b>", style_body_bold),
            Paragraph("50%", ParagraphStyle('M2', fontName='Helvetica-Bold', fontSize=8.5, textColor=DARK, alignment=1)),
            Paragraph("Due upon client review, live publishing on Canva, and transfer of editable Canva template access to client.", style_body),
            Paragraph("<b>PHP 2,750.00</b>", ParagraphStyle('MA2', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, alignment=2))
        ],
    ]
    milestone_table = Table(milestone_data, colWidths=[110, 50, 260, 112])
    milestone_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), DARK),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, CARD_BG]),
    ]))
    story.append(milestone_table)
    story.append(Spacer(1, 14))

    # 4. Tech Stack Box (Removed Layout Engine as requested)
    story.append(Paragraph("<b>4. Platform & Technical Specifications</b>", style_sec_head))
    story.append(Spacer(1, 5))

    tech_content = [
        [
            Paragraph("<b>Platform:</b> Canva Website Builder (No-Code Visual Editor)<br/>"
                      "<b>Account Environment:</b> Client-Provided Canva Pro Workspace<br/>"
                      "<b>Design Format:</b> Fully Editable Canva Project Template", style_body),
            Paragraph("<b>Hosting:</b> Canva Free Website Hosting<br/>"
                      "<b>Custom Domain:</b> Supported via Canva Domain Settings<br/>"
                      "<b>Handover:</b> Shared Editable Template Link & Design Ownership", style_body)
        ]
    ]
    tech_table = Table(tech_content, colWidths=[260, 260])
    tech_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(tech_table)
    story.append(Spacer(1, 14))

    # 5. Terms & Policies (Reflecting Canva's characteristics & limitations)
    story.append(Paragraph("<b>5. Terms, Inclusions & Platform Scope</b>", style_sec_head))
    story.append(Spacer(1, 5))

    terms_box = [
        Paragraph("• <b>Template Ownership & DIY Editing:</b> Full ownership and edit access to the Canva website template will be transferred to the client upon receipt of the final milestone payment, enabling self-service content edits without coding.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>No-Code Platform Scope & Limitations:</b> Because this website is built on the Canva Website Builder, custom software development and deep code-level technical SEO (such as custom Open Graph meta tags, structured JSON-LD schemas, and server-side rendering) are not supported on no-code platforms and are excluded.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Domain Name Registration (Excluded):</b> Domain registration and annual renewal fees (e.g. <i>banwa.ph</i> or <i>banwa.com</i>) are <b>not included</b>. The client purchases the domain directly, and guidance on connecting it within Canva's site settings will be provided.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Canva Account & Hosting:</b> Development will take place within the client's provided Canva Pro account. Standard website hosting provided by Canva is included; the existing Canva Pro subscription is maintained directly by the client.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Post-Launch Support:</b> Includes 7 calendar days of complimentary design tweaks and assistance in Canva following website publishing.", style_body),
    ]
    terms_table = Table([[terms_box]], colWidths=[532])
    terms_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), WHITE),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(terms_table)
    story.append(Spacer(1, 16))

    # 6. Formal Sign-off
    story.append(Paragraph("<b>6. Acceptance & Sign-off</b>", style_sec_head))
    story.append(Spacer(1, 5))

    sig_data = [
        [
            [
                Paragraph("<b>PREPARED BY:</b>", style_body_bold),
                Spacer(1, 20),
                Paragraph("<b>Jireh Tumbagahan</b>", style_body_bold),
                Paragraph("Designer & Web Developer<br/>Date: September 14, 2026", style_body_muted)
            ],
            [
                Paragraph("<b>ACCEPTED AND AGREED:</b>", style_body_bold),
                Spacer(1, 20),
                Paragraph("____________________________________________", style_body_muted),
                Paragraph("Laurence Cylde Moreno / Alyssa Moreno / Dhanielle Sim<br/>Date: ________________________", style_body_muted)
            ]
        ]
    ]
    sig_table = Table(sig_data, colWidths=[260, 272])
    sig_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
    ]))
    story.append(sig_table)

    # Build Document using NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Canva Quote successfully generated: {filename}")

if __name__ == "__main__":
    create_canva_quote_pdf()
