# Portfolio: inventory and capture list

Every project lives in `content/projects.ts`. A project with `draft: true` shows up in
`npm run dev` (marked "draft", with a striped tile if it has no media yet) but **not** in
production. To publish one: add its media, fill in the TODOs, and remove `draft: true`.

## Capture specs (all projects)

- **Index loop:** 6–10 s, silent, 16:10 or 16:9, 1280 px wide, MP4 (H.264). One idea per
  loop: a single interaction, not a tour. It should loop cleanly (end where it starts).
- **Poster:** a JPG of the most legible frame, 1600 px wide. It is what people see before the
  video loads and what shows with reduced motion on.
- **Full piece (optional):** the complete video with sound for the project page.
- Record at the same browser window size every time (e.g. 1440×900, zoom 100%), with
  the bookmarks bar hidden and dark/light mode consistent. FocuSee works well for this.
- **Blur or swap real data:** customer names, agent names, emails, phones, amounts.
  Use a demo account or seed data when possible.
- File layout: `public/work/<slug>/loop.mp4`, `poster.jpg`, `full.mp4`.

Encoding (what I used for the motion pieces):

```bash
# loop: 8 s starting at 0:07, no audio
ffmpeg -ss 7 -t 8 -i in.mov -an -vf "scale=1280:-2" -c:v libx264 -preset veryfast -crf 26 -pix_fmt yuv420p -movflags +faststart loop.mp4
# poster at 0:14.6
ffmpeg -ss 14.6 -i in.mov -frames:v 1 -vf "scale=1600:-2" -q:v 3 poster.jpg
# full piece with audio
ffmpeg -i in.mov -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart full.mp4
```

## Inventory

Mark each line: **case study** (full page with problem → what I did → results),
**index** (tile + short page) or **out**.

| Project | Proposed | Status | What's missing |
|---|---|---|---|
| Agentes ClickBalance | case study | draft | captures, real outcome numbers |
| ClickBalance One website | case study | draft | captures, a shareable conversion number |
| ClickBalance One launch film | index | **live** | tools used |
| How ClickBalance works (agile) | index | **live** | confirm role (script too?) |
| NoteDash | index | **live** | a loop instead of the static thumbnail, confirm stack |
| After-hours lead agent | index → case study once shipped | draft | flow diagram, demo conversation |
| ClickBalance Teams | index | draft | dashboard capture with fake names |
| Soy Autónomo | ? | draft | one-line description, capture |

Not listed yet (decide if they belong): lifecycle email program (currently folded into
Agentes), ClickBalance website migration to Vercel, NPS email campaign, Shotcam work,
estéticas booking bot, WhatsApp ↔ Twenty CRM.

## Shot list

### Agentes ClickBalance (highest priority)
1. **Sign-up → dashboard** loop: an agent signs up and lands on their home. (index tile)
2. Registering a referral: the form and the confirmation state.
3. Learning/certification module: progress through a lesson.
4. Commissions: invoice upload, then the status change in the admin view.
5. Reports dashboard (blur names).
6. Diagram: agent lifecycle stages → HubSpot → email sequences. I can draw this as an
   animated SVG if you send me the stage names and triggers.
7. Numbers: registrations (have), active agents, referrals that became customers.

### ClickBalance One website
1. **Hero + scroll** loop through the systems grid. (index tile)
2. Demo form → scheduler flow on desktop, and the same on mobile.
3. The pricing toggle and any micro-interactions you're proud of.
4. Diagram: form → HubSpot API → Meetings → GTM/GA4 → Google Ads.
5. Before/after if there was a previous version.

### NoteDash
1. 8 s loop of an actual drill: notes playing, answers going green/red, timer running.

### Systems projects (lead agent, Clay, Teams, Medusa)
Systems don't screenshot well. For each: one clean diagram of the flow (I can make these),
plus one capture of the most human-facing piece (a WhatsApp conversation, an enriched
table, the hours report).
