import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"productSteps " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="productSteps-question">
				{faq.question}
			</div>
			<div className="productSteps-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ