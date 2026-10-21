---
layout: page
title: "Talks"
permalink: /talks/
description: My conference presentations and poster sessions at academic venues.
nav: false
---

## Conference Presentations

<div class="lb-topics">

<h3 class="lb-fold-title" id="etfa-2026"><button type="button" aria-expanded="false" aria-controls="fold-etfa-2026"><span>Adaptive Soft Sensing: A Just-in-Time Approach with Self-Organizing Maps and Online Feature Selection</span></button></h3>
<p class="lb-fold-meta">IEEE ETFA 2026 · September 8-11, 2026 · Västerås, Sweden</p>

<div class="lb-fold-body" id="fold-etfa-2026" hidden="until-found">
    <p class="text-muted small mb-2 lb-authors">
        {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
        {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
        {% include author_link.liquid first="Maxime" last="Moreaud" %}<sup>2</sup>,
        {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
        {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup><br>
        <small><sup>1</sup> CMAP, École Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
    </p>
    <p>
        Just-in-Time soft sensors fit a local model for every new batch, but they struggle with hundreds of drifting process variables.  
        I presented our accepted paper, which retrieves similar batches in the latent space of a Self-Organizing Map (SOM) rather than in the raw sensor space, and keeps the model interpretable with an online SHAP-based feature selection that tracks the most influential variables as the process evolves.  
        On a Michelin rubber production line, it cuts the mean squared error by up to 61% and lifts R² from -0.14 to 0.56 over global baselines. Presented at the 31st IEEE International Conference on Emerging Technologies and Factory Automation, a premier conference on industrial automation sponsored by the IEEE Industrial Electronics Society.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="/publications/#berthier2026etfa_adaptive_soft_sensing" role="button">Abstract</a>
        <a class="btn btn-sm z-depth-0" href="https://etfa2026.ieee-ies.org/" role="button">Event page</a>
    </div>
</div>

<h3 class="lb-fold-title" id="rjs-2026"><button type="button" aria-expanded="false" aria-controls="fold-rjs-2026"><span>Self-Organized Conformal Prediction</span></button></h3>
<p class="lb-fold-meta">RJS 2026, 11th Young Statisticians Meeting · May 17-21, 2026 · Porquerolles, France</p>

<div class="lb-fold-body" id="fold-rjs-2026" hidden="until-found">
    <div class="row no-gutters">
        <div class="col-md-4 lb-fold-image">
            {% include figure.liquid path="assets/img/rjs2026.jpg" title="RJS 2026 · Porquerolles" class="img-fluid rounded z-depth-1" zoomable=true sizes="(min-width: 768px) 280px, 100vw" %}
        </div>
        <div class="col-md-8">
            <p class="text-muted small mb-2 lb-authors">
                {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
                {% include author_link.liquid first="Maxime" last="Moreaud" %}<sup>2</sup>,
                {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
                {% include author_link.liquid first="Aymeric" last="Dieuleveut" %}<sup>1</sup><br>
                <small><sup>1</sup> CMAP, École Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
            </p>
            <p>
                A week-long gathering of France's young statistics community, organized by the French Statistical Society (SFdS), bringing together PhD students and early-career researchers for talks, tutorials, and exchange. I presented Self-Organized Conformal Prediction, my work on closing regional coverage gaps in uncertainty quantification through unsupervised group discovery.
            </p>
            <div class="lb-research-links">
                <a class="btn btn-sm z-depth-0" href="/publications/#berthier2026selforganized_cp" role="button">Abstract</a>
                <a class="btn btn-sm z-depth-0" href="https://rjs2026.sciencesconf.org/" role="button">Event page</a>
            </div>
        </div>
    </div>
</div>

<h3 class="lb-fold-title" id="doctobib-2026"><button type="button" aria-expanded="false" aria-controls="fold-doctobib-2026"><span>A Unified Online Framework for Adaptive Soft Sensing in High-Dimensional Batch Processes</span></button></h3>
<p class="lb-fold-meta">Michelin DoctoBib'Day 2026 · April 13, 2026 · Clermont-Ferrand, France</p>

<div class="lb-fold-body" id="fold-doctobib-2026" hidden="until-found">
    <div class="row no-gutters">
        <div class="col-md-4 lb-fold-image">
            {% include figure.liquid path="assets/img/talks/michelin_doctobib_2026_1.jpg" title="Michelin DoctoBib'Day 2026 · Clermont-Ferrand" class="img-fluid rounded z-depth-1" zoomable=true sizes="(min-width: 768px) 280px, 100vw" %}
        </div>
        <div class="col-md-8">
            <p class="text-muted small mb-2 lb-authors">
                {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
                {% include author_link.liquid first="Maxime" last="Moreaud" %}<sup>2</sup>,
                {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
                {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup><br>
                <small><sup>1</sup> CMAP, École Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
            </p>
            <p>
                Predicting product quality in real time is hard when the manufacturing process itself keeps drifting.  
                This work benchmarks five adaptive soft sensing strategies, from temporal weighting to neighborhood-based retrieval, leveraging Self-Organizing Maps (SOMs) with online SHAP-driven feature selection (SHAP scores how much each variable drives a prediction).  
                Evaluated on 35,125 production batches and 167 process variables at Michelin, it gives practical guidance for choosing the right online adaptation strategy in industrial settings.
            </p>
            <div class="lb-research-links">
                <a class="btn btn-sm z-depth-0" href="/publications/#berthier2026unified_online_soft_sensing" role="button">Abstract</a>
            </div>
        </div>
    </div>
</div>

<h3 class="lb-fold-title" id="escape-35"><button type="button" aria-expanded="false" aria-controls="fold-escape-35"><span>Knowledge Discovery in Large-Scale Batch Processes through Explainable Boosted Models and Uncertainty Quantification: Application to Rubber Mixing</span></button></h3>
<p class="lb-fold-meta">ESCAPE 35 · July 9, 2025 · Ghent, Belgium</p>

<div class="lb-fold-body" id="fold-escape-35" hidden="until-found">
    <div class="row no-gutters">
        <div class="col-md-4 lb-fold-image">
            {% include figure.liquid path="assets/img/talks/Presentation_ESCAPE_2025.jpg" title="ESCAPE 35 Presentation" class="img-fluid rounded z-depth-1" zoomable=true sizes="(min-width: 768px) 280px, 100vw" %}
        </div>
        <div class="col-md-8">
            <p class="text-muted small mb-2 lb-authors">
                {% include author_link.liquid first="Louis" last="Berthier" %}<sup>1,2</sup>,
                {% include author_link.liquid first="Ahmed" last="Shokry" %}<sup>1</sup>,
                {% include author_link.liquid first="Eric" last="Moulines" %}<sup>1</sup>,
                {% include author_link.liquid first="Guillaume" last="Ramelet" %}<sup>2</sup>,
                {% include author_link.liquid first="Sylvain" last="Desroziers" %}<sup>2</sup><br>
                <small><sup>1</sup> CMAP, École Polytechnique &nbsp; <sup>2</sup> Michelin, Clermont-Ferrand</small>
            </p>
            <p>
                Rubber compounding involves hundreds of interacting process variables, and only a few actually drive product quality.  
                This work takes an explainability-first approach, combining gradient-boosted trees (a strong tabular model built from many small decision trees) with SHAP attribution and conformal prediction, giving engineers both interpretable insights and statistically rigorous uncertainty estimates.  
                The result: process experts can pinpoint critical quality drivers with quantified confidence. Presented at ESCAPE 35, one of Europe's premier conferences in computer-aided chemical engineering.
            </p>
            <div class="lb-research-links">
                <a class="btn btn-sm z-depth-0" href="/publications/#berthier2025knowledge_discovery_rubber_mixing" role="button">Abstract</a>
            </div>
        </div>
    </div>
</div>

</div>

## Posters

<div class="lb-topics">

<h3 class="lb-fold-title" id="poster-self-organized-cp"><button type="button" aria-expanded="false" aria-controls="fold-poster-socp"><span>Local Dynamic Calibration via Self-Organized CP <span class="badge bg-secondary">Presented at 2 venues</span></span></button></h3>
<p class="lb-fold-meta">SIAM UQ26 · March 22-25, 2026 · Minneapolis, USA<br>Michelin DoctoBib'Day 2026 · April 13, 2026 · Clermont-Ferrand, France</p>

<div class="lb-fold-body" id="fold-poster-socp" hidden="until-found">
    <p class="text-muted small mb-2 lb-authors">
        {% include author_link.liquid first="Louis" last="Berthier" %},
        {% include author_link.liquid first="Ahmed" last="Shokry" %},
        {% include author_link.liquid first="Maxime" last="Moreaud" %},
        {% include author_link.liquid first="Guillaume" last="Ramelet" %},
        {% include author_link.liquid first="Aymeric" last="Dieuleveut" %}
    </p>
    <p>
        Standard conformal prediction gives prediction intervals that are correct <em>on average</em>, which can hide undercoverage in specific, safety-critical process regimes.  
        Self-Organized CP closes that gap by discovering groups directly from the input geometry with a Self-Organizing Map (SOM), then calibrating locally inside each one, with no supervised labels and no model retraining.  
        I presented this poster at two venues: SIAM UQ26, a leading conference on uncertainty quantification for industrial applications, and Michelin's annual doctoral day.
    </p>
</div>

<h3 class="lb-fold-title" id="poster-knowledge-discovery"><button type="button" aria-expanded="false" aria-controls="fold-poster-kd"><span>Knowledge Discovery in Large-Scale Batch Processes <span class="badge bg-warning text-dark"><i class="fa-solid fa-trophy me-1"></i> Best Poster</span></span></button></h3>
<p class="lb-fold-meta">Welcome Day IP Paris · December 2024 · Paris, France</p>

<div class="lb-fold-body" id="fold-poster-kd" hidden="until-found">
    <div class="row no-gutters">
        <div class="col-md-4 lb-fold-image">
            {% include figure.liquid path="assets/img/talks/Welcome_Day_Poster_Award.jpg" title="IP Paris Welcome Day - Poster Award" class="img-fluid rounded z-depth-1" zoomable=true sizes="(min-width: 768px) 280px, 100vw" %}
        </div>
        <div class="col-md-8">
            <p class="text-muted small mb-2 lb-authors">
                {% include author_link.liquid first="Louis" last="Berthier" %},
                {% include author_link.liquid first="Ahmed" last="Shokry" %},
                {% include author_link.liquid first="Sylvain" last="Desroziers" %},
                {% include author_link.liquid first="Guillaume" last="Ramelet" %},
                {% include author_link.liquid first="Eric" last="Moulines" %}
            </p>
            <p>
                A black-box quality prediction is only useful once a process engineer can act on it.  
                This poster presents a unified framework pairing gradient boosted models with SHAP attribution and conformal coverage guarantees, translating raw predictions into interpretable process insights at production scale.  
                <br>
                <strong>Awarded Best Poster in the Mathematics category.</strong>
            </p>
        </div>
    </div>
</div>

<h3 class="lb-fold-title" id="poster-rubber-mixing"><button type="button" aria-expanded="false" aria-controls="fold-poster-rubber"><span>A Framework for Knowledge Discovery in Rubber Mixing Processes</span></button></h3>
<p class="lb-fold-meta">Michelin Doctoral Day · November 2024 · Clermont-Ferrand, France</p>

<div class="lb-fold-body" id="fold-poster-rubber" hidden="until-found">
    <p class="text-muted small mb-2 lb-authors">
        {% include author_link.liquid first="Louis" last="Berthier" %},
        {% include author_link.liquid first="Ahmed" last="Shokry" %},
        {% include author_link.liquid first="Sylvain" last="Desroziers" %},
        {% include author_link.liquid first="Guillaume" last="Ramelet" %},
        {% include author_link.liquid first="Eric" last="Moulines" %}
    </p>
    <p>
        The first iteration of my knowledge discovery framework, focused on offline analysis.  
        Gradient boosted regression combined with SHAP attribution and conformal prediction intervals surfaces the most influential process variables and their interactions, giving rubber compounding engineers a clear, quantified view of what drives product quality.
    </p>
</div>

<h3 class="lb-fold-title" id="poster-2dsbg"><button type="button" aria-expanded="false" aria-controls="fold-poster-2dsbg"><span>2DSBG: A 2D Semi Bi-Gaussian Filter Adapted for Adjacent and Multi-Scale Line Feature Detection</span></button></h3>
<p class="lb-fold-meta">ICASSP 2023 · June 2023 · Rhodes, Greece</p>

<div class="lb-fold-body" id="fold-poster-2dsbg" hidden="until-found">
    <p class="text-muted small mb-2 lb-authors">
        {% include author_link.liquid first="Baptiste" last="Magnier" %},
        {% include author_link.liquid first="Ghulam Sakhi" last="Shokouh" %},
        {% include author_link.liquid first="Louis" last="Berthier" %},
        {% include author_link.liquid first="Marcel" last="Pie" %},
        {% include author_link.liquid first="Adrien" last="Ruggiero" %}
    </p>
    <p>
        Thin line features in noisy images are notoriously hard to detect with sub-pixel accuracy.  
        The 2DSBG filter uses an asymmetric Gaussian kernel that selectively enhances elongated structures while suppressing background noise, outperforming classical symmetric approaches like the Laplacian-of-Gaussian on both synthetic and real-world benchmarks.  
        Presented at ICASSP, the flagship IEEE conference on signal processing.
    </p>
</div>

</div>
