<section class="gradient-section" data-color="none">
    <div class="showme">
        <div class="grid__container">
            <div class="grid__row flex-row">
                <div class="col-1">
					<p class="showme__text showme__text--money gradient-scroll-change gradient-text">
						‘‘show me the money’’ <br>
					</p>
					<p class="showme__text showme__text--slide">
						<small>slide to see how much cash back you can get</small>
						<sup>5</sup>
					</p>
                </div>
			</div>
			<div class="grid__row flex-row">
                <div class="col-1">
					
					<div class="showme__range-slider gradient-scroll-change" id="app">
						
						<div class="showme__range-slider-ttl">How much do you spend per month?</div>

						<div class="showme__range-slider-container">
							<span class="start">$0</span>
							<input type="range" min="0" max="5000" value="50" class="showme__range-slider-input" id="range-slider" v-model="spent">
							<span class="thumb">
								<div class="arrow-left"></div>
								<div class="amount">{{ spentFloat | parseMoney(0) }}</div>
								<div class="arrow-right"></div>
							</span>
							<span class="end">$5,000</span>
						</div>

						<div class="showme__range-slider-subttl">
							<div>{{ cashback | parseMoney }}</div>
							<small>annual <strong>cash back</strong></small>
						</div>

						<div class="showme__range-slider-icons">
							<div class="showme__range-slider-icon">
								<div class="number">
									{{ lipsticks }}
									<div class="icon">
										<img src="<?php echo THEMEURL . '/images/home/lipsticks.svg'; ?>" alt="">
									</div>
								</div>
								<span class="ttl">lipsticks</span>
							</div>
							<div class="showme__range-slider-icon">
								<div class="number">
									{{ pizzas }}
									<div class="icon">
										<img src="<?php echo THEMEURL . '/images/home/pizza.svg'; ?>" alt="">
									</div>
								</div>
								<span class="ttl">pizzas</span>
							</div>
							<div class="showme__range-slider-icon">
								<div class="number">
									{{ coffees }}
									<div class="icon">
										<img src="<?php echo THEMEURL . '/images/home/coffee.svg'; ?>" alt="">
									</div>
								</div>
								<span class="ttl">coffees</span>
							</div>
						</div>

					</div>

                </div>
            </div>
        </div>
    </div>
</section>