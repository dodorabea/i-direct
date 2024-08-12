(function ($) {
	/**
	 * Create drag and drop element.
	 */
	var customDragandDrop = function (element) {
		$(element).addClass("kwt-file__input");
		var element = $(element).wrap(
			`<div class="kwt-file"><div class="kwt-file__drop-area"><span class='kwt-file__choose-file ${
				element.attributes.data_btn_text
					? "" === element.attributes.data_btn_text.textContent
						? ""
						: "kwt-file_btn-text"
					: ""
			}'>${
				element.attributes.data_btn_text
					? "" === element.attributes.data_btn_text.textContent
						? `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_110_2)">
						<path d="M32.5 0H8.5C4.08172 0 0.5 3.58172 0.5 8V32C0.5 36.4183 4.08172 40 8.5 40H32.5C36.9183 40 40.5 36.4183 40.5 32V8C40.5 3.58172 36.9183 0 32.5 0Z" fill="#15A570" fill-opacity="0.1"/>
						<path d="M14 27.9998C13.6 27.9998 13.25 27.8498 12.95 27.5498C12.65 27.2498 12.5 26.8998 12.5 26.4998V23.6748C12.5 23.4623 12.5723 23.2842 12.7169 23.1404C12.8615 22.9967 13.0406 22.9248 13.2544 22.9248C13.4681 22.9248 13.6458 22.9967 13.7875 23.1404C13.9292 23.2842 14 23.4623 14 23.6748V26.4998H27V23.6748C27 23.4623 27.0723 23.2842 27.2169 23.1404C27.3615 22.9967 27.5406 22.9248 27.7544 22.9248C27.9681 22.9248 28.1458 22.9967 28.2875 23.1404C28.4292 23.2842 28.5 23.4623 28.5 23.6748V26.4998C28.5 26.8998 28.35 27.2498 28.05 27.5498C27.75 27.8498 27.4 27.9998 27 27.9998H14ZM19.75 14.8998L17.275 17.3748C17.1283 17.5248 16.9542 17.5956 16.7525 17.5873C16.5508 17.579 16.3717 17.4998 16.2152 17.3498C16.0717 17.1998 16 17.0206 16 16.8123C16 16.604 16.075 16.4248 16.225 16.2748L19.975 12.5248C20.0583 12.4415 20.1428 12.3831 20.2283 12.3498C20.3139 12.3165 20.4056 12.2998 20.5033 12.2998C20.6011 12.2998 20.6917 12.3165 20.775 12.3498C20.8583 12.3831 20.9417 12.4415 21.025 12.5248L24.8 16.2998C24.95 16.4498 25.025 16.6248 25.025 16.8248C25.025 17.0248 24.9533 17.1998 24.8098 17.3498C24.6533 17.4998 24.4708 17.5748 24.2625 17.5748C24.0542 17.5748 23.875 17.4998 23.725 17.3498L21.25 14.8998V23.4248C21.25 23.6373 21.1777 23.8154 21.0331 23.9592C20.8885 24.1029 20.7094 24.1748 20.4956 24.1748C20.2819 24.1748 20.1042 24.1029 19.9625 23.9592C19.8208 23.8154 19.75 23.6373 19.75 23.4248V14.8998Z" fill="#15A570"/>
						</g>
						<defs>
						<clipPath id="clip0_110_2">
						<rect width="41" height="40" fill="white"/>
						</clipPath>
						</defs>
						</svg>                                               
                        `
						: `${element.attributes.data_btn_text.textContent}`
					: `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_110_2)">
					<path d="M32.5 0H8.5C4.08172 0 0.5 3.58172 0.5 8V32C0.5 36.4183 4.08172 40 8.5 40H32.5C36.9183 40 40.5 36.4183 40.5 32V8C40.5 3.58172 36.9183 0 32.5 0Z" fill="#15A570" fill-opacity="0.1"/>
					<path d="M14 27.9998C13.6 27.9998 13.25 27.8498 12.95 27.5498C12.65 27.2498 12.5 26.8998 12.5 26.4998V23.6748C12.5 23.4623 12.5723 23.2842 12.7169 23.1404C12.8615 22.9967 13.0406 22.9248 13.2544 22.9248C13.4681 22.9248 13.6458 22.9967 13.7875 23.1404C13.9292 23.2842 14 23.4623 14 23.6748V26.4998H27V23.6748C27 23.4623 27.0723 23.2842 27.2169 23.1404C27.3615 22.9967 27.5406 22.9248 27.7544 22.9248C27.9681 22.9248 28.1458 22.9967 28.2875 23.1404C28.4292 23.2842 28.5 23.4623 28.5 23.6748V26.4998C28.5 26.8998 28.35 27.2498 28.05 27.5498C27.75 27.8498 27.4 27.9998 27 27.9998H14ZM19.75 14.8998L17.275 17.3748C17.1283 17.5248 16.9542 17.5956 16.7525 17.5873C16.5508 17.579 16.3717 17.4998 16.2152 17.3498C16.0717 17.1998 16 17.0206 16 16.8123C16 16.604 16.075 16.4248 16.225 16.2748L19.975 12.5248C20.0583 12.4415 20.1428 12.3831 20.2283 12.3498C20.3139 12.3165 20.4056 12.2998 20.5033 12.2998C20.6011 12.2998 20.6917 12.3165 20.775 12.3498C20.8583 12.3831 20.9417 12.4415 21.025 12.5248L24.8 16.2998C24.95 16.4498 25.025 16.6248 25.025 16.8248C25.025 17.0248 24.9533 17.1998 24.8098 17.3498C24.6533 17.4998 24.4708 17.5748 24.2625 17.5748C24.0542 17.5748 23.875 17.4998 23.725 17.3498L21.25 14.8998V23.4248C21.25 23.6373 21.1777 23.8154 21.0331 23.9592C20.8885 24.1029 20.7094 24.1748 20.4956 24.1748C20.2819 24.1748 20.1042 24.1029 19.9625 23.9592C19.8208 23.8154 19.75 23.6373 19.75 23.4248V14.8998Z" fill="#15A570"/>
					</g>
					<defs>
					<clipPath id="clip0_110_2">
					<rect width="41" height="40" fill="white"/>
					</clipPath>
					</defs>
					</svg>
                    `
			}</span>${element.outerHTML}</span><span class="kwt-file__msg">${
				"" === element.placeholder ? "or drop files here" : `${element.placeholder}`
			}</span><div class="kwt-file__delete"></div></div></div>`
		);
		var element = element.parents(".kwt-file");

		// Add class on focus and drage enter event.
		element.on("dragenter focus click", ".kwt-file__input", function (e) {
			$(this).parents(".kwt-file__drop-area").addClass("is-active");
		});

		// Remove class on blur and drage leave event.
		element.on("dragleave blur drop", ".kwt-file__input", function (e) {
			$(this).parents(".kwt-file__drop-area").removeClass("is-active");
		});

		// Show filename when change file.
		element.on("change", ".kwt-file__input", function (e) {
			let filesCount = $(this)[0].files.length;
			let textContainer = $(this).next(".kwt-file__msg");
			if (1 === filesCount) {
				let fileName = $(this).val().split("\\").pop();
				textContainer
					.text(fileName)
					.next(".kwt-file__delete")
					.css("display", "block");
			} else if (filesCount > 1) {
				textContainer
					.text(filesCount + " files selected")
					.next(".kwt-file__delete")
					.css("display", "inline-block");
			} else {
				textContainer.text(
					`${
						"" === this[0].placeholder
							? "or drop files here"
							: `${this[0].placeholder}`
					}`
				);
				$(this)
					.parents(".kwt-file")
					.find(".kwt-file__delete")
					.css("display", "none");
			}
		});

		// Delete selected file.
		element.on("click", ".kwt-file__delete", function (e) {
			let deleteElement = $(this);
			deleteElement.parents(".kwt-file").find(`.kwt-file__input`).val(null);
			deleteElement
				.css("display", "none")
				.prev(`.kwt-file__msg`)
				.text(
					`${
						"" ===
						$(this).parents(".kwt-file").find(".kwt-file__input")[0].placeholder
							? "or drop files here"
							: `${
									$(this).parents(".kwt-file").find(".kwt-file__input")[0].placeholder
							  }`
					}`
				);
		});
	};

	$.fn.kwtFileUpload = function (e) {
		var _this = $(this);
		$.each(_this, function (index, element) {
			customDragandDrop(element);
		});
		return this;
	};
})(jQuery);

// Plugin initialize
jQuery(document).ready(function ($) {
	$(".demo1").kwtFileUpload();
});
