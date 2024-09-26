import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const Main = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`
const TitleContainer = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fb0066;
	color: white;
`
const QuotesMain = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const QuotesBody = styled.div`
	padding: 20px;
	width: 50%;
	max-height: 500px;
	background: white;
	display: flex;
	flex-direction: column;
	gap: 20px;
	-webkit-box-shadow: -2px 3px 29px 0px rgb(0, 0, 0);
	-moz-box-shadow: -2px 3px 29px 0px rgb(0, 0, 0);
	box-shadow: -2px 3px 29px 0px rgb(0, 0, 0);
	@media (max-width: 768px) {
		width: 80%;
	}
`
const Title = styled.h1`
	font-size: 25px;
	@media (max-width: 768px) {
		font-size: 22px;
	}
`

const QuoteText = styled.p`
	text-align: justify;
	font-size: 20px;
	@media (max-width: 768px) {
		font-size: 18px;
	}
`
const QuoteAuthor = styled.p`
	font-style: italic;
`
const NextButton = styled.button`
	width: 100px;
	align-self: center;
	padding: 10px;
	border-radius: 50px;
	background: transparent;
	cursor: pointer;
`

const Quotes = () => {
	const [selectedQuote, setSelectedQuote] = useState({})
	const [color, setColor] = useState("rgb(0,0,0)")
	const [change, setChange] = useState(0)
	const quotes = [
		"You can't use up creativity. The more you use, the more you have. - Maya Angelou",
		"The best way to predict the future is to create it. - Peter Drucker",
		"Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
		"The only way to do great work is to love what you do. - Steve Jobs",
		"It always seems impossible until it’s done. - Nelson Mandela",
		"I am not afraid... I was born to do this. - Joan of Arc",
		"Believe you can and you’re halfway there. - Theodore Roosevelt",
	]
	const workQuotes = quotes.map((el) => {
		var text = el.split("-")[0]
		const author = el.split("-")[1]
		return {
			text,
			author,
		}
	})
	useEffect(() => {
		setSelectedQuote(
			workQuotes[Math.floor(Math.random() * workQuotes.length - 1) + 1]
		)
		setColor(
			`rgb(${Math.floor(Math.random() * 255) + 1},${
				Math.floor(Math.random() * 255) + 1
			},${Math.floor(Math.random() * 255) + 1})`
		)
	}, [change])

	console.log(workQuotes)

	return (
		<Main>
			<TitleContainer>
				<Title>Random quotes</Title>
			</TitleContainer>
			<QuotesMain>
				<QuotesBody
					style={{
						color,
					}}>
					<QuoteText>{selectedQuote.text}</QuoteText>
					<QuoteAuthor>- {selectedQuote.author}</QuoteAuthor>
					<NextButton
						style={{
							color,
							border: `1px solid ${color}`,
						}}
						className="next"
						onClick={() => {
							setChange(change + 1)
						}}>
						next quote
					</NextButton>
				</QuotesBody>
			</QuotesMain>
		</Main>
	)
}
export default Quotes
