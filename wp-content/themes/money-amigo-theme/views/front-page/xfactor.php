<?php 

$features = [
	[
		'text' => 'debit card with 1% cash back',
		'number' => '2',
		'others' => 'none'
	],
	[
		'text' => 'premium black card',
		'number' => '',
		'others' => 'none'
	],
	[
		'text' => 'real metal card',
		'number' => '8, 11',
		'others' => 'none'
	],
	[
		'text' => 'access to $100, 0% APR loan',
		'number' => '7',
		'others' => 'none'
	],
	[
		'text' => '360,000+ discounts',
		'number' => '3',
		'others' => 'none'
	],
	[
		'text' => 'access online doctor 24/7/365. No consult fee',
		'number' => '9',
		'others' => 'none'
	],
	// [
	// 	'text' => 'save with dental, vision & RX discount card',
	// 	'number' => '9',
	// 	'others' => 'none'
	// ],
	[
		'text' => 'access to RX discounts',
		'number' => '9',
		'others' => 'none'
	],
	[
		'text' => 'fast sign-up',
		'number' => '',
		'others' => 'some'
	],
	[
		'text' => 'no overdraft fees, ever',
		'number' => '',
		'others' => 'some'
	],
	[
		'text' => 'family cards',
		'number' => '',
		'others' => 'some'
	],
	[
		'text' => 'direct deposit up to 2 days earlier',
		'number' => '6',
		'others' => 'some'
	]
];

?>
<section class="gradient-section" data-color="none">
    <div class="xfactor">
        <div class="xfactor__container">
            <div class="grid__row flex-row xfactor__row">
                <div class="col-1-2 xfactor__col">
                    <div class="xfactor__text-box">
						<div class="xfactor__text">
							<span class="the gradient-scroll-change gradient-text">the</span> <br>
							<span class="equis gradient-scroll-change gradient-text">X</span>
							<span class="factor gradient-scroll-change gradient-text">factor</span> <br>
							<span class="see gradient-scroll-change gradient-text">see for yourself...</span>
						</div>
					</div>
                </div>
                <div class="col-1-2 xfactor__col">
                    <div class="xfactor__table-box">
						<table class="xfactor__table">
							<thead>
								<th>features</th>
								<th>
									<img src="<?php echo THEMEURL; ?>images/tablecell1.svg" alt="">
								</th>
								<th>
									<img src="<?php echo THEMEURL; ?>images/tablecell2.svg" alt="">
								</th>
							</thead>
							<tbody>
								<?php foreach($features as $feature): ?>
									<tr>
										<td>
											<?php echo $feature['text']; ?>
											<?php if($feature['number']): echo '<sup>' . $feature['number'] . '</sup>'; endif; ?>
										</td>
										<td><i class="fas fa-check-circle"></i></td>
										<td><?php echo $feature['others']; ?></td>
									</tr>
								<?php endforeach; ?>
								<tr>
									<td colspan="3"><a class="xfactor__button" href="#just-a-click-away">get yours</a></td>
								</tr>
							</tbody>
						</table>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>
