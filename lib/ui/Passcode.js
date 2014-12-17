var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		type: React.PropTypes.string,
		label: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: '',
			label: 'Enter your passcode',
			type: 'default'
		};
	},

	getInitialState: function() {
		return {
			label: this.props.label,
			passcode: ''
		}
	},
	
	render: function() {

		var passcodeClassName = classnames(this.props.type, {
			'Passcode': true
		});

		return (
			<div className={passcodeClassName}>
				<div className="Passcode-label">{this.props.label}</div>
				<div className="Passcode-fields">
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.props.passcode.length > 0) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.props.passcode.length > 1) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.props.passcode.length > 2) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.props.passcode.length > 3) ? "has-value" : "")} />
					</div>
				</div>
			</div>
		);
	}
});

