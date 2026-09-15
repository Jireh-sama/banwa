import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
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

        # Bottom footer
        self.setStrokeColor(colors.HexColor("#E5DDD6"))
        self.setLineWidth(0.5)
        self.line(40, 36, letter[0] - 40, 36)
        self.drawString(40, 24, "Banwa Landing Page Invoice (Canva No-Code) • Prepared by Jireh Tumbagahan")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 40, 24, page_str)
        self.restoreState()

def create_canva_invoice_pdf(filename="Banwa_Canva_Project_Invoice.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=42
    )

    PRIMARY = colors.HexColor("#8B3A22")       # Terracotta
    PRIMARY_LIGHT = colors.HexColor("#FBF5F1") # Very subtle terracotta tint
    DARK = colors.HexColor("#201A18")          # Rich Charcoal
    MUTED = colors.HexColor("#6B6562")         # Slate / Warm Gray
    BORDER = colors.HexColor("#E5DDD6")        # Soft border
    CARD_BG = colors.HexColor("#FAF7F4")       # Warm light card background
    WHITE = colors.HexColor("#FFFFFF")
    SUCCESS_BG = colors.HexColor("#F2F8F4")    # Light green tint for payment clarity
    SUCCESS_BORDER = colors.HexColor("#C3DEC9")
    SUCCESS_TEXT = colors.HexColor("#21613A")

    # Typography
    style_logo_title = ParagraphStyle('LogoTitle', fontName='Helvetica-Bold', fontSize=26, leading=28, textColor=PRIMARY)
    style_inv_title = ParagraphStyle('InvTitle', fontName='Helvetica-Bold', fontSize=20, leading=22, textColor=DARK, alignment=2)
    style_inv_meta = ParagraphStyle('InvMeta', fontName='Helvetica', fontSize=8.5, leading=12, textColor=MUTED, alignment=2)
    
    style_meta_label = ParagraphStyle('MetaLabel', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=PRIMARY)
    style_meta_val = ParagraphStyle('MetaVal', fontName='Helvetica', fontSize=8.5, leading=12, textColor=DARK)
    style_sec_head = ParagraphStyle('SecHead', fontName='Helvetica-Bold', fontSize=10.5, leading=13, textColor=PRIMARY)
    
    style_body = ParagraphStyle('Body', fontName='Helvetica', fontSize=8.2, leading=11.5, textColor=DARK)
    style_body_bold = ParagraphStyle('BodyBold', fontName='Helvetica-Bold', fontSize=8.5, leading=12, textColor=DARK)
    style_body_muted = ParagraphStyle('BodyMuted', fontName='Helvetica', fontSize=7.8, leading=11, textColor=MUTED)
    
    style_table_header = ParagraphStyle('TableHead', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE)
    style_table_header_center = ParagraphStyle('TableHeadCenter', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE, alignment=1)
    style_table_header_right = ParagraphStyle('TableHeadRight', fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=WHITE, alignment=2)

    style_bank_title = ParagraphStyle('BankTitle', fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=PRIMARY)
    style_bank_detail = ParagraphStyle('BankDetail', fontName='Helvetica', fontSize=8.5, leading=12.5, textColor=DARK)
    style_bank_num = ParagraphStyle('BankNum', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=DARK)

    story = []

    # 1. Header (Logo & Invoice Meta)
    brand_header_cell = [
        Paragraph("<b>BANWA</b>", style_logo_title),
        Spacer(1, 2),
        Paragraph("<font color='#6B6562' size='8'>Official Project Invoice</font>", style_body_muted)
    ]

    inv_meta_cell = [
        Paragraph("<b>INVOICE</b>", style_inv_title),
        Spacer(1, 3),
        Paragraph(
            "<b>Invoice No:</b> BNW-INV-2026-001<br/>"
            "<b>Quote Ref:</b> BNW-2026-011 (Canva Edition)<br/>"
            "<b>Invoice Date:</b> September 15, 2026<br/>"
            "<b>Payment Status:</b> <font color='#8B3A22'><b>Due Upon Receipt</b></font>",
            style_inv_meta
        )
    ]

    header_table = Table([[brand_header_cell, inv_meta_cell]], colWidths=[270, 262])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(header_table)
    story.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceBefore=4, spaceAfter=10))

    # 2. Parties Card (Billed To & Payable To)
    billed_to_content = [
        Paragraph("<b>BILLED TO</b>", style_meta_label),
        Spacer(1, 3),
        Paragraph("<b>Laurence Cylde Moreno, Alyssa Moreno, & Dhanielle Sim</b>", style_body_bold),
        Spacer(1, 2),
        Paragraph("Project: Official Landing Page (Canva Edition)", style_body),
        Paragraph("Client: Banwa", style_body_muted),
    ]
    payable_to_content = [
        Paragraph("<b>PAYABLE TO</b>", style_meta_label),
        Spacer(1, 3),
        Paragraph("<b>Jireh Tumbagahan</b>", style_body_bold),
        Spacer(1, 2),
        Paragraph("Role: Developer & Designer", style_body),
        Paragraph("Email: jirehtumbagahan@gmail.com", style_body_muted),
    ]

    parties_table = Table([[billed_to_content, payable_to_content]], colWidths=[260, 260])
    parties_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(parties_table)
    story.append(Spacer(1, 10))

    # 3. Project Deliverables & Scope Summary Table
    story.append(Paragraph("<b>1. Invoice Items & Deliverables (Canva Package)</b>", style_sec_head))
    story.append(Spacer(1, 4))

    items = [
        [
            Paragraph("<b>Item Description</b>", style_table_header),
            Paragraph("<b>Milestone Split</b>", style_table_header_center),
            Paragraph("<b>Amount (PHP)</b>", style_table_header_right)
        ],
        [
            Paragraph("<b>Canva Landing Page UI/UX & Visual Layout</b><br/>"
                      "<font color='#6B6562'>Design and assembly of the Banwa landing page within the Canva Website Builder. "
                      "Includes brand styling, curated typography, hero presentation, brand story sections, "
                      "mission and vision, and testimonials layout.</font>", style_body),
            Paragraph("Milestone 1 (50%)", ParagraphStyle('C1', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 3,500.00", ParagraphStyle('A1', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Mobile Responsiveness & Navigation Link Setup</b><br/>"
                      "<font color='#6B6562'>Adjustment of Canva's layout for readable desktop and mobile viewing. "
                      "Configuration of page section navigation anchors, call-to-action buttons, and inquiry contact links.</font>", style_body),
            Paragraph("Milestone 1 (50%)", ParagraphStyle('C2', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,000.00", ParagraphStyle('A2', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Canva Publishing & Editable Template Handover</b><br/>"
                      "<font color='#6B6562'>Live website publishing through Canva hosting, DNS setup guidance for custom domain connection, "
                      "and full transfer of editable Canva template access to client team.</font>", style_body),
            Paragraph("Milestone 2 (50%)", ParagraphStyle('C3', fontName='Helvetica', fontSize=8, textColor=MUTED, alignment=1)),
            Paragraph("PHP 1,000.00", ParagraphStyle('A3', fontName='Helvetica', fontSize=8.5, textColor=DARK, alignment=2))
        ],
    ]

    item_table = Table(items, colWidths=[332, 100, 100])
    item_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('LINEBELOW', (0,1), (-1,-1), 0.5, BORDER),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
    ]))
    story.append(item_table)

    # 4. Total & Amount Due Breakdown
    total_data = [
        [
            Paragraph("<b>Total Project Investment (Canva Edition)</b>", ParagraphStyle('T1', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2)),
            Paragraph("PHP 5,500.00", ParagraphStyle('TA1', fontName='Helvetica-Bold', fontSize=8.5, textColor=DARK, alignment=2))
        ],
        [
            Paragraph("<b>Flat-Rate Startup Package Adjustment</b>", ParagraphStyle('T2', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2)),
            Paragraph("PHP 0.00", ParagraphStyle('TA2', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2))
        ],
        [
            Paragraph("<b>Remaining Balance (Milestone 2 • Due Upon Final Handover)</b>", ParagraphStyle('T3', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2)),
            Paragraph("PHP 2,750.00", ParagraphStyle('TA3', fontName='Helvetica', fontSize=8.5, textColor=MUTED, alignment=2))
        ],
        [
            Paragraph("<b>AMOUNT DUE NOW (Milestone 1 • 50% Project Deposit)</b>", ParagraphStyle('T4', fontName='Helvetica-Bold', fontSize=9.5, textColor=PRIMARY, alignment=2)),
            Paragraph("<b>PHP 2,750.00</b>", ParagraphStyle('TA4', fontName='Helvetica-Bold', fontSize=12, textColor=PRIMARY, alignment=2))
        ]
    ]

    total_table = Table(total_data, colWidths=[376, 156])
    total_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('LINEBELOW', (0,0), (-1,-2), 0.5, BORDER),
        ('BACKGROUND', (0,-1), (-1,-1), PRIMARY_LIGHT),
        ('BOX', (0,-1), (-1,-1), 1, PRIMARY),
    ]))
    story.append(total_table)
    story.append(Spacer(1, 10))

    # 5. Payment Methods (Bank Details: MariBank & GoTyme)
    story.append(Paragraph("<b>2. Payment Instructions & Bank Transfer Options</b>", style_sec_head))
    story.append(Spacer(1, 4))

    maribank_card = [
        Paragraph("<b>Option 1: MariBank</b>", style_bank_title),
        Spacer(1, 4),
        Paragraph("<b>Bank:</b> MariBank Philippines", style_bank_detail),
        Paragraph("<b>Account Name:</b> Jireh Tumbagahan", style_bank_detail),
        Spacer(1, 2),
        Paragraph("<b>Account Number:</b>", style_bank_detail),
        Paragraph("<b>19920348534</b>", style_bank_num),
    ]

    gotyme_card = [
        Paragraph("<b>Option 2: GoTyme Bank</b>", style_bank_title),
        Spacer(1, 4),
        Paragraph("<b>Bank:</b> GoTyme Bank", style_bank_detail),
        Paragraph("<b>Account Name:</b> Jireh Tumbagahan", style_bank_detail),
        Spacer(1, 2),
        Paragraph("<b>Account Number:</b>", style_bank_detail),
        Paragraph("<b>018608407806</b>", style_bank_num),
    ]

    banks_table = Table([[maribank_card, gotyme_card]], colWidths=[260, 260])
    banks_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(banks_table)
    story.append(Spacer(1, 8))

    # 6. Payment Terms & Confirmation Notes Box
    notes_box = [
        Paragraph(
            "• <b>Payment Confirmation:</b> After completing your transfer via MariBank or GoTyme Bank, please send a screenshot or transaction reference receipt to <b>jirehtumbagahan@gmail.com</b> to confirm receipt.<br/>"
            "• <b>Milestone Schedule:</b> This deposit (Milestone 1: PHP 2,750.00) confirms engagement and initiates landing page layout, typography, and section design in Canva. The remaining balance (Milestone 2: PHP 2,750.00) is due upon client review, publishing, and template handover.<br/>"
            "• <i>Note: If preferred by the client team, full project payment (PHP 5,500.00) may also be settled in advance using the bank details above.</i>",
            style_body
        )
    ]
    notes_table = Table([[notes_box]], colWidths=[532])
    notes_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), WHITE),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(notes_table)
    story.append(Spacer(1, 10))

    # 7. Sign-off / Acknowledgement
    sig_data = [
        [
            [
                Paragraph("<b>ISSUED BY:</b>", style_body_bold),
                Spacer(1, 10),
                Paragraph("<b>Jireh Tumbagahan</b>", style_body_bold),
                Paragraph("Developer & Designer<br/>Email: jirehtumbagahan@gmail.com", style_body_muted)
            ],
            [
                Paragraph("<b>PAYMENT ACKNOWLEDGEMENT:</b>", style_body_bold),
                Spacer(1, 10),
                Paragraph("<font color='#6B6562'>Official receipt / confirmation will be issued immediately upon verification of bank transfer.</font>", style_body_muted)
            ]
        ]
    ]
    sig_table = Table(sig_data, colWidths=[260, 272])
    sig_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER),
        ('INNERGRID', (0,0), (-1,-1), 1, BORDER),
    ]))
    story.append(sig_table)

    # Build Document using NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Canva Invoice successfully generated: {filename}")

if __name__ == "__main__":
    create_canva_invoice_pdf()
