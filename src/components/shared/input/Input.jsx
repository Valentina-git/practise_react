import React from "react";

const Input = ({
	title,
	type = "text",
	value,
	onChange,
	placeholder = "",
	name,
}) => {
	return (
		<label>
			{title}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
