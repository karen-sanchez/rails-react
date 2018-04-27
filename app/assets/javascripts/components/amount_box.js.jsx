var AmountBox = React.createClass({

	render: function() {
		return(
			<div className='col-md-4'>
			  <div className={'card mb-5 list-group-item-' + this.props.type}>
			    <div className='panel-heading'>
			      {this.props.text}
			    </div>
			    <div className='panel-body'>
			      {amountFormat(this.props.amount)}
			    </div>
			  </div>
			</div>
		);
	}
});