<?php 

$nos = [
	[
		'text' => 'hidden fees',
		'number' => ''
	],
	[
		'text' => 'minimum deposit',
		'number' => ''
	],
	[
		'text' => 'minimum balance',
		'number' => ''
	],
	[
		'text' => 'attitude',
		'number' => '1'
	]
];

?>
<section class="gradient-section" data-color="none">
	<div class="sayyestono">
		<div class="grid__container">
			<div class="grid__row">
				
				<!-- Say yes to no -->
				<div class="col-1">
					<div class="sayyestono__text">
						<p class="gradient-scroll-change gradient-text">say ‘yes’ to ‘no’</p>
					</div>
				</div>
				
				<!-- NO -->
				<div class="col-1">
					<div class="sayyestono__no">
						<div class="no">
							<p class="gradient-scroll-change gradient-text">no</p>
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
				</div>
				

			</div>
		</div>
	</div>
</section>