---
layout: page
title: "Talks"
permalink: /talks/
description: My conference presentations and poster sessions at academic venues.
nav: false
---

## Conference Presentations

<div class="row justify-content-sm-center mt-3">
    <div class="col-md-10 mt-3 mt-md-0">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-3">Michelin DoctoBib'Day 2026</h5>
                <p class="card-text">
                    <strong>A Unified Online Framework for Adaptive Soft Sensing in High-Dimensional Batch Processes</strong>
                </p>
                <p class="text-muted small mb-2">
                    April 13, 2026 — Clermont-Ferrand, France<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                    {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
                    {% include author_link.liquid first="Maxime" last="Moreaud" %}<sup>2</sup>,
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
                    {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup><br>
                    <small><sup>1</sup> CMAP, Ecole Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
                </p>
                <p class="card-text small">
                    How do you predict product quality in real time when the manufacturing process itself keeps changing?  
                    This work benchmarks five adaptive soft sensing strategies, from temporal weighting to neighborhood-based retrieval, leveraging self-organizings with online SHAP-driven feature selection.  
                    Evaluated on over 35,000 production batches and 167 process variables at Michelin, it provides practical guidance for choosing the right online adaptation strategy in industrial settings.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="row justify-content-sm-center mt-3">
    <div class="col-md-10 mt-3 mt-md-0">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-3">ESCAPE 35</h5>
                <p class="card-text">
                    <strong>Knowledge Discovery in Large-Scale Batch Processes through Explainable Boosted Models and Uncertainty Quantification: Application to Rubber Mixing</strong>
                </p>
                <p class="text-muted small mb-2">
                    July 9, 2025 — Ghent, Belgium<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                    {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1,*</sup>,
                    {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup>,
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %}<sup>1</sup>,
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup><br>
                    <small><sup>1</sup> CMAP, CNRS, Ecole Polytechnique, IP Paris &nbsp; <sup>2</sup> Michelin</small>
                </p>
                <p class="card-text small">
                    Rubber compounding involves hundreds of interacting process variables, but which ones actually drive product quality?  
                    This work takes an explainability-first approach, combining gradient boosted trees with SHAP attribution and conformal prediction to give engineers both interpretable insights and statistically rigorous uncertainty estimates.  
                    The result: process experts can pinpoint critical quality drivers with quantified confidence. Presented at ESCAPE 35, one of Europe's premier conferences in computer-aided chemical engineering.
                </p>
                <div class="row justify-content-sm-center mt-3 mb-2">
                    <div class="col-md-10 text-center">
                        {% include figure.liquid path="assets/img/talks/Presentation_ESCAPE_2025.jpg" title="ESCAPE 35 Presentation" class="img-fluid rounded z-depth-1" zoomable=true width="60%" %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

---

## Posters

<div class="row mt-3">
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Local Dynamic Calibration via JiT-CP</h6>
                <p class="text-muted small mb-2">
                    April 13, 2026 — Clermont-Ferrand, France — Michelin DoctoBib'Day 2026<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Maxime" last="Moreaud" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                    {% include author_link.liquid first="Aymeric" last="Dieuleveut" %}
                </p>
                <p class="card-text small">
                    Standard conformal prediction gives you prediction intervals that are correct *on average*, but can be dangerously wrong for specific process conditions.  
                    JiT-CP fixes this by retrieving the most similar historical batches through SOM-based similarity search and computing locally weighted conformal scores, producing prediction intervals that adapt to whichever regime the process is currently in.
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Local Dynamic Calibration via JiT-CP</h6>
                <p class="text-muted small mb-2">
                    March 22-25, 2026 — Minneapolis, USA — SIAM UQ26<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Maxime" last="Moreaud" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                    {% include author_link.liquid first="Aymeric" last="Dieuleveut" %}
                </p>
                <p class="card-text small">
                    Presented at SIAM UQ26, a leading conference on uncertainty quantification dedicated to industrial applications.  
                    JiT-CP tackles a well-known blind spot of conformal prediction: marginal coverage guarantees can hide systematic failures for specific subpopulations.  
                    By coupling Just-in-Time Learning with a SOM-based latent space, the method delivers locally adaptive prediction intervals with group-conditional coverage, no distributional assumptions, no retraining required.
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Knowledge Discovery in Large-Scale Batch Processes</h6>
                <p class="text-muted small mb-2">
                    December 2024 — Paris, France — Welcome Day IP Paris<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Eric" last="Moulines" %},
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}
                </p>
                <p class="card-text small">
                    How do you turn a black-box quality prediction into something a process engineer can act on?  
                    This poster presents a unified framework pairing gradient boosted models with SHAP attribution and conformal coverage guarantees, translating raw predictions into interpretable, uncertainty-aware process insights at production scale.  
                    <strong>Awarded Best Poster in the Mathematics category.</strong>
                </p>
                <div class="row justify-content-sm-center mt-3 mb-2">
                    <div class="col-md-10 text-center">
                        {% include figure.liquid path="assets/img/talks/Welcome_Day_Poster_Award.jpg" title="IP Paris Welcome Day - Poster Award" class="img-fluid rounded z-depth-1" zoomable=true width="100%" %}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">A Framework for Knowledge Discovery in Rubber Mixing Processes</h6>
                <p class="text-muted small mb-2">
                    November 2024 — Clermont-Ferrand, France — Michelin Doctoral Day<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Eric" last="Moulines" %},
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}
                </p>
                <p class="card-text small">
                    The first iteration of my knowledge discovery framework, focused on offline analysis.  
                    Gradient boosted regression combined with SHAP attribution and conformal prediction intervals surfaces the most influential process variables and their interactions, giving rubber compounding engineers a clear, quantified view of what drives product quality.
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">2DSBG: A 2D Semi Bi-Gaussian Filter for Line Feature Detection</h6>
                <p class="text-muted small mb-2">
                    June 2023 — Rhodes, Greece — ICASSP 2023<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Adrien" last="Ruggiero" %},
                    {% include author_link.liquid first="Marcel" last="Pie" %},
                    {% include author_link.liquid first="Ghulam Sakhi" last="Shokouh" %},
                    {% include author_link.liquid first="Baptiste" last="Magnier" %}
                </p>
                <p class="card-text small">
                    How do you detect thin line features in noisy images with sub-pixel accuracy?  
                    The 2DSBG filter uses an asymmetric Gaussian kernel that selectively enhances elongated structures while suppressing background noise, outperforming classical symmetric approaches like the Laplacian-of-Gaussian on both synthetic and real-world benchmarks.  
                    Presented at ICASSP, the flagship IEEE conference on signal processing.
                </p>
            </div>
        </div>
    </div>
</div>
