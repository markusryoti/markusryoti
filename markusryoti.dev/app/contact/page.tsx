export default function Contact() {
	return (
		<div className="flex justify-center items-center">
			<form className="flex flex-col justify-center items-center w-full">
				<div className="w-full flex flex-col justify-center items-center">
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Your email</span>
						</label>
						<input
							type="text"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Topic</span>
						</label>
						<input
							type="text"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div className="w-full max-w-xs">
						<label className="label">
							<span className="label-text">Message</span>
						</label>
						<textarea className="textarea textarea-bordered textarea-md w-full max-w-xs h-56"></textarea>
					</div>
				</div>
				<div className="flex justify-center items-center w-full max-w-xs pt-4 pb-4">
					<button className="btn btn-primary w-full">Submit</button>
				</div>
			</form>
		</div>
	);
}
