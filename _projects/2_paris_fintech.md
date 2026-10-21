---
layout: page
title: "WEBI"
description: "An AI copilot for structured bond products, built at the Paris Fintech Hackathon."
seo_description: "WEBI, an AI copilot that turns bank deal flow into mandate-matched structured bond offers, built at the Paris Fintech Hackathon by Louis Berthier's team."
img: assets/img/projects/webi_thumbnail.jpg
importance: 2
category: hackathon
event: "Paris Fintech Hackathon, April 2026"
giscus_comments: false
---

<div class="lb-research-links lb-project-links">
  <a class="btn btn-sm z-depth-0" href="/assets/pdf/WEBI.pdf" role="button">Pitch deck</a>
  <a class="btn btn-sm z-depth-0" href="https://devpost.com/software/webi-we-buy-structured-bond-products" role="button">Devpost</a>
  <a class="btn btn-sm z-depth-0" href="https://luma.com/630cpew5?tk=CG90NF" role="button">Event page</a>
</div>

Walk onto any asset-management or family-office desk in Paris, Geneva, or Luxembourg and you will find a structured-products analyst three monitors deep, scrolling hundreds of Bloomberg messages and bank emails. Each one pitches a structured bond product that has to be cross-checked against the fund's mandate, risk tolerance, sector exposures, and a dozen mostly-implicit constraints. Talking to people who do this job during the hackathon, the pattern was stark: roughly 70% of their day goes to manually filtering offers that will never match, and real opportunities get buried in the wrong inbox.

## The product

**WEBI** ("We buy") is *the SaaS platform that filters deal flow and helps shape the right products*, an AI copilot that turns fragmented bank deal flow into a curated, mandate-matched, negotiation-ready pipeline. It works in three layers:

- **Intelligent filter**: it ingests emails, Bloomberg chats, and term-sheet PDFs, uses Gemini 2.0 Flash to extract a 17-field structured representation of each product (issuer, underlying, coupon, barrier, maturity, ratings, currency, ESG flags, and more), and a FAISS vector index to match it against each fund's codified mandate. Hard violations are auto-rejected, matches above 90% reach the analyst with a transparent score and explanation, and near-misses are kept for negotiation.
- **Negotiation engine**: about 80% of structured products are adjusted after discussion with the issuing bank, so WEBI turns a near-miss (say a 4% coupon against a 4.5% mandate) into a drafted counter-offer that tells the analyst exactly which parameter to push, by how much, and why the fund is justified in asking.
- **Market discovery**: a secure, anonymous cross-fund signal layer. If one family office receives a deal that better fits another's mandate, WEBI routes the connection, and it runs every incoming deal against an entire mandate database at once, built for the multi-family offices where a single analyst juggles dozens of mandates.

Built with Gemini 2.0 Flash, Cerebras, FAISS, Python, and TypeScript.

## At the hackathon

Built in 24 hours at the **Paris Fintech Hackathon (Solve with AI)** at HEC Paris, France's premier student Generative AI and Fintech hackathon: 150 selected hackers, hosted by SP AI (Sciences Po), ASES France (HEC & Stanford), and Google Developer Groups. We pitched WEBI to a jury of VCs and founders. No prize this round, but a crash course in finance, negotiation, and shipping a product overnight.

**Team:** Louis Berthier, [Emile Jouannet](https://www.linkedin.com/in/emile-jouannet-1225aa251/), [Mathilde Anita Thierry](https://mathildeanitathierry.com/), [Elie de Baudus](https://www.linkedin.com/in/elie-de-baudus/), and [Roland Sosin](https://www.linkedin.com/in/roland-sosin/).

## Pitch

{% include lb_youtube.liquid id="P7xl16s4qR4" poster="assets/img/projects/video_webi_pitch.jpg" label="Play the WEBI pitch video" %}
<p class="text-muted small text-center">Video: the WEBI pitch, Paris Fintech Hackathon, April 2026.</p>

---

<div class="lb-research-links">
  <a class="btn btn-sm z-depth-0" href="/hackathons/" role="button">All hackathons</a>
</div>
