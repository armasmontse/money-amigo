<?php 

$nos = [
	[
		'text' => 'interest',
		'number' => ''
	],
	[
		'text' => 'loan fees',
		'number' => ''
	],
	[
		'text' => 'credit check',
		'number' => ''
	],
	[
		'text' => 'catch',
		'number' => ''
	],
];

?>
<!-- section -->
<section class="gradient-section" data-color="none">
	<div class="loan">
		<div class="grid__container">
			<div class="grid__row">
				
				<!-- Col -->
				<div class="col-1">
					<div class="loan__content">
						<div class="loan__text loan__text--big gradient-scroll-change gradient-text">
							$100 loan
						</div>
						<div class="loan__text loan__text--apr gradient-scroll-change gradient-text">
							0% APR <sup>7</sup>
						</div>
						<div class="loan__no">
							<div class="no">
								<p class="gradient-scroll-change gradient-text">nó</p>
							</div>
							<div class="items">
								<ul>
									<?php foreach($nos as $no): ?>
										<li class="gradient-scroll-change gradient-text">
											<?php echo $no['text']; ?>
											<?php if($no['number']): echo '<sup>' . $no['number'] . '</sup>'; endif; ?>
										</li>
									<?php endforeach; ?>
								</ul>
							</div>
						</div>
						<div class="loan__text max-530 gradient-scroll-change gradient-text">
							<strong>Borrow $100</strong>, 4 times a year, up to <strong>10 days before</strong> your next direct deposit.
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>