import React from "react";

class DbTypes extends React.Component {
	render() {
		return (
			<div class="card-group">
				<div class="card">
					<img
						src="https://media.istockphoto.com/photos/little-girl-with-type-i-diabetes-picture-id485446207?k=6&m=485446207&s=612x612&w=0&h=21Rw3G_m8kFPkAprl-wg8MHQMPaIZyZr-LYGu82-pQY="
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">TYPE 1 DIABETES</h5>
						<p class="card-text">
							Type 1 diabetes can develop at any age, but occurs most frequently
							in children and adolescents. When you have type 1 diabetes, your
							body produces very little or no insulin, which means that you need
							daily insulin injections to maintain blood glucose levels under
							control.
						</p>
						<a href="#abc" class="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
				<div class="card">
					<img
						src="https://media.istockphoto.com/photos/type-2-diabetes-doctor-a-test-disease-health-medical-concept-picture-id677527278?k=6&m=677527278&s=612x612&w=0&h=Xr53XyQgaUslC_52cPUMbVmPm1Iw6rKJAD8GUmqEnwc="
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">TYPE 2 DIABETES</h5>
						<p class="card-text">
							Type 2 diabetes is more common in adults and accounts for around
							90% of all diabetes cases. When you have type 2 diabetes, your
							body does not make good use of the insulin that it produces. The
							cornerstone of type 2 diabetes treatment is healthy lifestyle,
							including increased physical activity and healthy diet.{" "}
						</p>
						<a href="#abc" class="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
				<div class="card">
					<img
						src="https://media.istockphoto.com/photos/pregnant-woman-having-blood-glucose-checked-picture-id512966216?k=6&m=512966216&s=612x612&w=0&h=xE5lELmgR52H9BqqSgVSspHa5SujWp4X6Ul9H0qv308="
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">GESTATIONAL DIABETES (GDM)</h5>
						<p class="card-text">
							Gestational diabetes (GDM) is a type of diabetes that consists of
							high blood glucose during pregnancy and is associated with
							complications to both mother and child. GDM usually disappears
							after pregnancy but women affected and their children are at
							increased risk of developing type 2 diabetes later in life..
						</p>
						<a href="#abc" class="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default DbTypes;
