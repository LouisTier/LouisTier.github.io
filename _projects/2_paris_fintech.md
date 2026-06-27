---
layout: page
title: "WEBI"
description: "An AI copilot for structured bond products, built at the Paris Fintech Hackathon."
img: assets/img/projects/webi_thumbnail.jpg
importance: 2
category: hackathon
giscus_comments: false
---

Walk onto any asset-management or family-office desk in Paris, Geneva, or Luxembourg and you will find a structured-products analyst three monitors deep, scrolling hundreds of Bloomberg messages and bank emails. Each one pitches a structured bond product that has to be cross-checked against the fund's mandate, risk tolerance, sector exposures, and a dozen mostly-implicit constraints. Talking to people who do this job during the hackathon, the pattern was stark: roughly 70% of their day goes to manually filtering offers that will never match, and real opportunities get buried in the wrong inbox.

**WEBI** ("We buy") is *the SaaS platform that filters deal flow and helps shape the right products*, an AI copilot that turns fragmented bank deal flow into a curated, mandate-matched, negotiation-ready pipeline. It works in three layers:

- **Intelligent filter**: it ingests emails, Bloomberg chats, and term-sheet PDFs, uses Gemini 2.0 Flash to extract a 17-field structured representation of each product (issuer, underlying, coupon, barrier, maturity, ratings, currency, ESG flags, and more), and a FAISS vector index to match it against each fund's codified mandate. Hard violations are auto-rejected, matches above 90% reach the analyst with a transparent score and explanation, and near-misses are kept for negotiation.
- **Negotiation engine**: about 80% of structured products are adjusted after discussion with the issuing bank, so WEBI turns a near-miss (say a 4% coupon against a 4.5% mandate) into a drafted counter-offer that tells the analyst exactly which parameter to push, by how much, and why the fund is justified in asking.
- **Market discovery**: a secure, anonymous cross-fund signal layer. If one family office receives a deal that better fits another's mandate, WEBI routes the connection, and it runs every incoming deal against an entire mandate database at once, built for the multi-family offices where a single analyst juggles dozens of mandates.

Built with Gemini 2.0 Flash, Cerebras, FAISS, Python, and TypeScript.

Built in 24 hours at the **Paris Fintech Hackathon (Solve with AI)** at HEC Paris, France's premier student Generative AI and Fintech hackathon: 150 selected hackers, hosted by SP AI (Sciences Po), ASES France (HEC & Stanford), and Google Developer Groups. We pitched WEBI to a jury of VCs and founders. No prize this round, but a crash course in finance, negotiation, and shipping a product overnight.

**Team:** Louis Berthier, [Emile Jouannet](https://www.linkedin.com/in/emile-jouannet-1225aa251/), [Mathilde Anita Thierry](https://mathildeanitathierry.com/), [Elie de Baudus](https://www.linkedin.com/in/elie-de-baudus/), and [Roland Sosin](https://www.linkedin.com/in/roland-sosin/).

---

## Pitch

<div style="width: 100%; margin: 0 auto 2rem;">
    <div style="position: relative; padding-top: 56.25%; height: 0; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/P7xl16s4qR4" title="WEBI - Pitch" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
</div>

---

<div class="d-flex gap-2 justify-content-center mt-3">
    <a href="https://devpost.com/software/webi-we-buy-structured-bond-products" class="btn btn-sm btn-outline-primary" target="_blank">Devpost</a>
    <a href="/assets/pdf/WEBI.pdf" class="btn btn-sm btn-outline-primary" target="_blank">Pitch deck (PDF)</a>
    <a href="/hackathons/" class="btn btn-sm btn-outline-secondary">See all Hackathons</a>
</div>
