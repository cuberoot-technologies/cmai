<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<section class="relative mx-auto flex h-[900px] max-w-screen-xl flex-wrap lg:items-center">
	<div class="w-full py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:py-24">
		<div class="mx-auto max-w-lg text-center">
			<h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

			<p class="mt-4 text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
				ipsa culpa autem, at itaque nostrum!
			</p>
		</div>

		<form action="#" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
			<div>
				<label for="email" class="sr-only">Enter your Full Name</label>

				<div class="relative">
					<input
						type="email"
						class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
						placeholder="Enter Full Name"
					/>

					<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div>
				<label for="password" class="sr-only">Enter your email</label>

				<div class="relative">
					<input
						type="email"
						class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
						placeholder="Enter email"
					/>

					<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div>
				<label for="password" class="sr-only">Enter your email</label>

				<div class="relative">
					<select
						name=""
						id=""
						class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
					>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs">
							Select Policy Recommendation Category</option
						>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs">
							Indian Carbon Market
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Indian Voluntary Carbon Market</option
						>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>International Voluntary Carbon Market</option
						>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Article 6.2
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Article 6.4
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Article 6.8
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Green Credit Program
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Carbon Market
						</option>
						<option class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
							>Any other
						</option>
					</select>
				</div>
			</div>

			<div>
				<label class="sr-only" for="message">Message</label>

				<textarea
					class="w-full rounded-lg border-gray-200 p-3 text-sm"
					placeholder="Brief Description of Your Policy Recommendation"
					rows="3"
					id="message"
				></textarea>
			</div>
			<div>
				<label class="sr-only" for="message">Message</label>

				<textarea
					class="w-full rounded-lg border-gray-200 p-3 text-sm"
					placeholder=" Key Benefits of Your Policy Recommendations"
					rows="3"
					id="message"
				></textarea>
			</div>
			<div>
				<label for="password" class="sr-only">Upload attachment</label>

				<div class="relative">
					<input
						type="file"
						class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
					/>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<button
					type="submit"
					class="border-text-secondary w-4xs w-full border-orange-600 bg-orange-600 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white"
				>
					Sign in
				</button>
			</div>
		</form>
	</div>

	<div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
		<img
			alt=""
			src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			class="absolute inset-0 h-full w-full object-cover"
		/>
	</div>
</section>
