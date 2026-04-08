---
layout: page
title: "Talks"
permalink: /talks/
description: Conference presentations and poster sessions at academic venues.
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
                    Addresses the fundamental challenge of concept drift in real-time quality prediction across high-dimensional industrial batch processes. The framework benchmarks five adaptive soft sensing strategies — spanning temporal weighting, neighborhood-based retrieval, and hybrid approaches — all sharing a unified self-organizing map (SOM) backbone with SHAP-driven feature selection. Evaluated at scale on 35,125 production batches over 167 input process variables, establishing practical guidance for online adaptation in manufacturing environments.
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
                    Presents an explainability-first approach to knowledge extraction in rubber compounding — a high-dimensional, nonlinear batch process central to tire manufacturing. Gradient boosted trees are combined with SHAP-based feature attribution and conformal prediction to deliver both interpretable process insights and statistically rigorous uncertainty estimates, enabling engineers to pinpoint critical process drivers with quantified confidence. Presented at one of Europe's premier conferences in computer-aided chemical engineering.
                </p>
                <div class="row justify-content-sm-center mt-3 mb-2">
                    <div class="col-md-10 text-center">
                        {% include figure.liquid path="assets/img/talks/Presentation_ESCAPE_2025.jpg" title="ESCAPE 35 Presentation" class="img-fluid rounded z-depth-1" zoomable=true width="70%" %}
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
                    A distribution-free calibration framework for online quality monitoring under process variability. JiT-CP dynamically retrieves the most relevant historical batches through SOM-based similarity search and applies locally weighted conformal calibration, producing prediction intervals that adapt to shifting process regimes and remain reliable even under non-stationarity.
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
                    JiT-CP addresses a fundamental limitation of standard conformal prediction: marginal coverage guarantees that fail systematically for heterogeneous subpopulations. By coupling Just-in-Time Learning with a self-organizing map latent space, the method retrieves process-similar historical instances and computes locally weighted conformal scores — yielding per-instance adaptive prediction intervals with group-conditional coverage, without distributional assumptions or model retraining.
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
                    A unified framework for interpretable quality prediction and uncertainty quantification in large-scale industrial batch processes. Gradient boosted models paired with SHAP attribution and conformal coverage guarantees translate black-box predictions into actionable, uncertainty-aware process insights — enabling data-driven knowledge discovery at production scale. Awarded Best Poster in the Mathematics category.
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
                    An offline knowledge discovery pipeline for rubber compounding batch processes, combining gradient boosted regression with SHAP-based feature attribution and prediction-interval calibration via conformal prediction. The framework surfaces the most influential process variables and their interaction effects, translating model predictions into interpretable, uncertainty-aware insights for industrial process engineers.
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
                    Introduces the 2D Semi Bi-Gaussian (2DSBG) filter, an anisotropic convolution kernel for sub-pixel accurate line feature detection in images. Its asymmetric Gaussian cross-section selectively enhances elongated structures while suppressing isotropic noise, improving localization precision over classical symmetric approaches such as Laplacian-of-Gaussian — demonstrated across synthetic and real-world benchmarks at ICASSP, the flagship IEEE signal processing conference.
                </p>
            </div>
        </div>
    </div>
</div>
