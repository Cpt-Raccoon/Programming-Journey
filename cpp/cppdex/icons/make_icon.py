"""Vygeneruje icon.svg (pixelové logo {PJ}). PNG se z něj dělají přes prohlížeč."""
G = {
    '{': ["..XX", ".X..", ".X..", "X...", ".X..", ".X..", "..XX"],
    '}': ["XX..", "..X.", "..X.", "...X", "..X.", "..X.", "XX.."],
    'P': ["XXXX.", "X...X", "X...X", "XXXX.", "X....", "X....", "X...."],
    'J': ["..XXX", "...X.", "...X.", "...X.", "X..X.", "X..X.", ".XX.."],
}
SEQ = [('{', '#4dabf7', '#1c4f8a'), ('P', '#ffd43b', '#b8541f'),
       ('J', '#ffd43b', '#b8541f'), ('}', '#4dabf7', '#1c4f8a')]
S, px = 100, 3.4
W = sum(len(G[c][0]) for c, _, _ in SEQ) + len(SEQ) - 1
H = 7 + 3  # písmena + mezera + lišta postupu
ox, oy = (S - W * px) / 2, (S - H * px) / 2
sh, fr, x = [], [], 0
for c, col, shc in SEQ:
    for r, row in enumerate(G[c]):
        for k, ch in enumerate(row):
            if ch == 'X':
                X, Y = ox + (x + k) * px, oy + r * px
                sh.append(f'<rect x="{X + px*.6:.2f}" y="{Y + px*.6:.2f}" width="{px}" height="{px}" fill="{shc}"/>')
                fr.append(f'<rect x="{X:.2f}" y="{Y:.2f}" width="{px}" height="{px}" fill="{col}"/>')
    x += len(G[c][0]) + 1
by = oy + 9 * px
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S} {S}" shape-rendering="crispEdges">
<defs><radialGradient id="g" cx="25%" cy="0%" r="90%"><stop offset="0" stop-color="#2a2f6b"/><stop offset="1" stop-color="#0f1226"/></radialGradient></defs>
<rect width="{S}" height="{S}" fill="url(#g)"/>
{''.join(sh)}{''.join(fr)}
<rect x="{ox:.2f}" y="{by:.2f}" width="{W*px:.2f}" height="{px*.8:.2f}" fill="#33397a"/>
<rect x="{ox:.2f}" y="{by:.2f}" width="{W*px*.4:.2f}" height="{px*.8:.2f}" fill="#51cf66"/>
</svg>
'''
open('icon.svg', 'w').write(svg)
