import React, { Component } from "react";
import WrapperForm from "../StyledForm";
import Form from "./shared/form/Form";
import Input from "./shared/input/Input";
import Select from "./shared/select/Select";
import { outlay } from "./utils/selectOptions";

class App extends Component {
	state = {
		date: Date.now(),
		time: "",
		outlay: "",
		total: "",
	};

	onHandlerChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		console.log(name, value);
	};
	render() {
		return (
			<>
				<Form className='form_field'>
					<WrapperForm>
						<Input
							className='form_input'
							title='Day'
							type='date'
							value={this.state.date}
							onChange={this.onHandlerChange}
						/>
						<Input
							className='form_input'
							title='Time'
							type='time'
							name='time'
							value={this.state.time}
							onChange={this.onHandlerChange}
						/>
						<Select
							sets={outlay}
							handleChange={this.onHandlerChange}
						/>
						<Input
							className='form_input'
							title='Sum'
							type='text'
							name='total'
							placeholder='Введите сумму'
							value={this.state.total}
							onChange={this.onHandlerChange}
						/>
					</WrapperForm>
				</Form>
			</>
		);
	}
}

export default App;
