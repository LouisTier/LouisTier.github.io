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
                    April 13, 2026 · Clermont-Ferrand, France<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                    {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
                    {% include author_link.liquid first="Maxime" last="Moreaud" %}<sup>2</sup>,
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
                    {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup><br>
                    <small><sup>1</sup> CMAP, École Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
                </p>
                <p class="card-text small">
                    Predicting product quality in real time is hard when the manufacturing process itself keeps drifting.  
                    This work benchmarks five adaptive soft sensing strategies, from temporal weighting to neighborhood-based retrieval, leveraging Self-Organizing Maps (SOMs) with online SHAP-driven feature selection (SHAP scores how much each variable drives a prediction).  
                    Evaluated on 35,125 production batches and 167 process variables at Michelin, it gives practical guidance for choosing the right online adaptation strategy in industrial settings.
                </p>
                <div class="row justify-content-sm-center mt-3 mb-1">
                    <div class="col-md-10 mb-2">
                        {% include figure.liquid path="assets/img/talks/michelin_doctobib_2026_1.jpg" title="Michelin DoctoBib'Day 2026 · Clermont-Ferrand" class="img-fluid rounded z-depth-1" zoomable=true %}
                    </div>
                </div>
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
                    July 9, 2025 · Ghent, Belgium<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                    {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1,*</sup>,
                    {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup>,
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %}<sup>1</sup>,
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup><br>
                    <small><sup>1</sup> CMAP, CNRS, École Polytechnique, IP Paris &nbsp; <sup>2</sup> Michelin</small>
                </p>
                <p class="card-text small">
                    Rubber compounding involves hundreds of interacting process variables, and only a few actually drive product quality.  
                    This work takes an explainability-first approach, combining gradient-boosted trees (a strong tabular model built from many small decision trees) with SHAP attribution and conformal prediction, giving engineers both interpretable insights and statistically rigorous uncertainty estimates.  
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
                <h6 class="card-title">Local Dynamic Calibration via Self-Organized CP <span class="badge bg-secondary align-middle">Presented at 2 venues</span></h6>
                <p class="text-muted small mb-2">
                    SIAM UQ26 · Minneapolis, USA · March 22-25, 2026<br>
                    Michelin DoctoBib'Day 2026 · Clermont-Ferrand, France · April 13, 2026<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Maxime" last="Moreaud" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                    {% include author_link.liquid first="Aymeric" last="Dieuleveut" %}
                </p>
                <p class="card-text small">
                    Standard conformal prediction gives prediction intervals that are correct *on average*, which can hide undercoverage in specific, safety-critical process regimes.  
                    Self-Organized CP closes that gap by discovering groups directly from the input geometry with a Self-Organizing Map (SOM), then calibrating locally inside each one, with no supervised labels and no model retraining.  
                    I presented this poster at two venues: SIAM UQ26, a leading conference on uncertainty quantification for industrial applications, and Michelin's annual doctoral day.
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Knowledge Discovery in Large-Scale Batch Processes</h6>
                <p class="text-muted small mb-2">
                    December 2024 · Paris, France · Welcome Day IP Paris<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                    {% include author_link.liquid first="Eric" last="Moulines" %}
                </p>
                <p class="card-text small">
                    A black-box quality prediction is only useful once a process engineer can act on it.  
                    This poster presents a unified framework pairing gradient boosted models with SHAP attribution and conformal coverage guarantees, translating raw predictions into interpretable, uncertainty-aware process insights at production scale.  
                    <br>
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
                    November 2024 · Clermont-Ferrand, France · Michelin Doctoral Day<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Ahmed" last="Shokry" %},
                    {% include author_link.liquid first="Sylvain" last="Desroziers" %},
                    {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                    {% include author_link.liquid first="Eric" last="Moulines" %}
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
                    June 2023 · Rhodes, Greece · ICASSP 2023<br>
                    {% include author_link.liquid first="Louis" last="Berthier" %},
                    {% include author_link.liquid first="Adrien" last="Ruggiero" %},
                    {% include author_link.liquid first="Marcel" last="Pie" %},
                    {% include author_link.liquid first="Ghulam Sakhi" last="Shokouh" %},
                    {% include author_link.liquid first="Baptiste" last="Magnier" %}
                </p>
                <p class="card-text small">
                    Thin line features in noisy images are notoriously hard to detect with sub-pixel accuracy.  
                    The 2DSBG filter uses an asymmetric Gaussian kernel that selectively enhances elongated structures while suppressing background noise, outperforming classical symmetric approaches like the Laplacian-of-Gaussian on both synthetic and real-world benchmarks.  
                    Presented at ICASSP, the flagship IEEE conference on signal processing.
                </p>
            </div>
        </div>
    </div>
</div>
