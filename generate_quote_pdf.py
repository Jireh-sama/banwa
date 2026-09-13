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
            self.drawString(40, letter[1] - 30, "BANWA — Landing Page Project Quote (Ref: BNW-2026-010)")
            self.drawRightString(letter[0] - 40, letter[1] - 30, "Confidential Proposal")

        # Bottom footer on all pages
        self.setStrokeColor(colors.HexColor("#E5DDD6"))
        self.setLineWidth(0.5)
        self.line(40, 38, letter[0] - 40, 38)
        self.drawString(40, 26, "Banwa Landing Page Project Quote • Prepared by Jireh Tumbagahan")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 40, 26, page_str)
        self.restoreState()

def create_quote_pdf(filename="Banwa_Project_Quote.pdf"):
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

    # 1. Header (Clean BANWA text without subtext)
    brand_header_cell = [
        Paragraph("<b>BANWA</b>", style_logo_title),
    ]

    quote_meta_cell = [
        Paragraph("<b>PROJECT QUOTE</b>", style_quote_title),
        Spacer(1, 4),
        Paragraph("<b>Quote Ref:</b> BNW-2026-010<br/><b>Date:</b> September 14, 2026<br/><b>Validity:</b> 30 Days (Until Oct 14, 2026)", style_quote_meta)
    ]

    header_table = Table([[brand_header_cell, quote_meta_cell]], colWidths=[280, 252])
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
        Paragraph("Project: Official Landing Page", style_body),
        Paragraph("Client: Banwa", style_body_muted),
    ]
    provider_content = [
        Paragraph("<b>PREPARED BY</b>", style_meta_label),
        Spacer(1, 3),
        Paragraph("<b>Jireh Tumbagahan</b>", style_body_bold),
        Spacer(1, 2),
        Paragraph("Email: jirehtumbagahan@gmail.com", style_body),
        Paragraph("GitHub: github.com/Jireh-sama/banwa", style_body_muted),
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
    story.append(Paragraph("<b>1. Project Overview & Objectives</b>", style_sec_head))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "This project quote covers the design, development, optimization, and deployment of an official "
        "landing page for <b>Banwa</b>. The website will establish Banwa's digital presence with responsive "
        "design, search engine discoverability, and cloud hosting.",
        style_body
    ))
    story.append(Spacer(1, 12))

    # 4. Scope of Work Table (Clean, grounded deliverables)
    story.append(Paragraph("<b>2. Scope of Work & Deliverables</b>", style_sec_head))
    story.append(Spacer(1, 5))

    items = [
        [
            Paragraph("<b>Deliverable & Description</b>", style_table_header),
            Paragraph("<b>Timeline</b>", style_table_header_center),
            Paragraph("<b>Amount</b>", style_table_header_right)
        ],
        [
            Paragraph("<b>Landing Page UI/UX Design & Layout</b><br/>"
                      "<font color='#6B6562'>Creation of a clean, responsive layout tailored to the Banwa brand aesthetic. "
                      "Includes curated typography, color palette, intuitive visual hierarchy, and mobile-first responsive "
                      "styling across desktop, tablet, and mobile devices.</font>", style_body),
            Paragraph("Milestone 1", ParagraphStyle('C1', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 3,500.00", ParagraphStyle('A1', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Next.js Frontend Architecture & Development</b><br/>"
                      "<font color='#6B6562'>Modern web implementation built with Next.js and Tailwind CSS. Includes modular "
                      "page components, structured brand presentation, smooth interactions, inquiry/contact capture, "
                      "and standard web performance optimization.</font>", style_body),
            Paragraph("Milestone 1", ParagraphStyle('C2', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 3,500.00", ParagraphStyle('A2', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Search Engine Optimization (SEO) & Social Sharing</b><br/>"
                      "<font color='#6B6562'>Comprehensive on-page SEO setup: targeted keyword metadata, Open Graph & Twitter "
                      "Cards for rich previews when shared on social media, structured heading hierarchy, and search engine indexing readiness.</font>", style_body),
            Paragraph("Milestone 2", ParagraphStyle('C3', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,500.00", ParagraphStyle('A3', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Cloud Deployment, Git Repo & Production Handover</b><br/>"
                      "<font color='#6B6562'>Complete version-controlled GitHub repository handover, automated deployment pipeline "
                      "to Vercel with automatic SSL/HTTPS security certificates, and full source code ownership transfer.</font>", style_body),
            Paragraph("Milestone 2", ParagraphStyle('C4', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,500.00", ParagraphStyle('A4', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
    ]

    deliverables_table = Table(items, colWidths=[356, 76, 100])
    deliverables_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, CARD_BG]),
    ]))
    story.append(deliverables_table)
    story.append(Spacer(1, 10))

    # 5. Total Investment Box
    total_data = [
        [
            Paragraph("<b>Subtotal (Landing Page Development)</b>", style_body),
            Paragraph("PHP 10,000.00", ParagraphStyle('T1', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Flat-Rate Startup Package Adjustment</b>", style_body_muted),
            Paragraph("PHP 0.00", ParagraphStyle('T2', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2))
        ],
        [
            Paragraph("<b>TOTAL PROJECT INVESTMENT</b>", ParagraphStyle('TotalLabel', fontName='Helvetica-Bold', fontSize=10, textColor=PRIMARY)),
            Paragraph("<b>PHP 10,000.00</b>", ParagraphStyle('TotalVal', fontName='Helvetica-Bold', fontSize=11, textColor=PRIMARY, alignment=2))
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
            Paragraph("Due upon agreement to initiate landing page UI/UX design, Next.js environment, and core component implementation.", style_body),
            Paragraph("<b>PHP 5,000.00</b>", ParagraphStyle('MA1', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, alignment=2))
        ],
        [
            Paragraph("<b>Milestone 2:<br/>Final Handover</b>", style_body_bold),
            Paragraph("50%", ParagraphStyle('M2', fontName='Helvetica-Bold', fontSize=8.5, textColor=DARK, alignment=1)),
            Paragraph("Due upon client review, production deployment to Vercel, and GitHub repository ownership transfer.", style_body),
            Paragraph("<b>PHP 5,000.00</b>", ParagraphStyle('MA2', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, alignment=2))
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

    # 4. Tech Stack Box
    story.append(Paragraph("<b>4. Technology Stack & Infrastructure</b>", style_sec_head))
    story.append(Spacer(1, 5))

    tech_content = [
        [
            Paragraph("<b>Core Framework:</b> Next.js (App Router, Server Components)<br/>"
                      "<b>Styling:</b> Tailwind CSS + Responsive Design<br/>"
                      "<b>SEO:</b> Open Graph & Twitter Card Metadata", style_body),
            Paragraph("<b>Hosting:</b> Vercel Cloud Platform<br/>"
                      "<b>Security:</b> Automatic SSL / HTTPS Encryption<br/>"
                      "<b>Version Control:</b> GitHub Repository (Jireh-sama/banwa)", style_body)
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

    # 5. Terms & Policies
    story.append(Paragraph("<b>5. Terms, Inclusions & Exclusions</b>", style_sec_head))
    story.append(Spacer(1, 5))

    terms_box = [
        Paragraph("• <b>Source Code Ownership:</b> Full ownership and intellectual property of the custom Next.js codebase and assets are transferred to the client upon receipt of the final milestone payment.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Domain Name Registration (Excluded):</b> Domain registration and renewal fees (e.g. <i>banwa.ph</i> or <i>banwa.com</i>) are <b>not included</b> in this quote. The client will purchase the domain directly from their registrar of choice, and assistance with DNS configuration to Vercel will be provided.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Cloud Deployment:</b> Production deployment to Vercel is included, providing automated builds and secure HTTPS/SSL certificate configuration.", style_body),
        Spacer(1, 3),
        Paragraph("• <b>Warranty & Bug Fix Support:</b> Includes 14 calendar days of complimentary post-launch support for bug fixes, display adjustments, and minor text/image updates.", style_body),
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
                Paragraph("Developer & Designer<br/>Date: September 14, 2026", style_body_muted)
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
    print(f"Quote successfully generated: {filename}")

if __name__ == "__main__":
    create_quote_pdf()
