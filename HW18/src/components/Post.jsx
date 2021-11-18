import React from "react";

const Post = ({ author, content, image, date }) => {
	const divStyle = {
		backgroundColor: "#0d1a27",
		width: "750px",
		height: "auto",
		color: "white",
	};

	const infoStyle = {
		display: 'flex',
	}

	const nameStyle = {
		color: "white",
		fontSize: "20px",
		fontWeight: "bold",

	};

	const photoStyle = {
		borderRadius: "50%",
		margin: "20px 20px 0",
		width: "70px",
	};

	const nicknameStyle = {
		color: "#667683",
		paddingLeft: "10px",
	};

	const imageStyle = {
		width: "600px",
		borderRadius: "20px",
		margin: "10px 20px 20px 110px",
	};

	const styleColumn = {
		display: "flex",
		flexDirection: "column",
		marginTop: "20px",
	};

	return (
		<div style={divStyle}>
			<div style={infoStyle}>
				<img style={photoStyle} src={author.photo} alt="" />
				<div style={styleColumn}>

					<div>
						<span style={nameStyle}>{author.name}</span>
						<span style={nicknameStyle}>{author.nickname} &middot; {date}</span>
					</div>

					<div>
						<span>{content}</span>
					</div>

				</div>

			</div>

			<img style={imageStyle} src={image} alt="" />
		</div>
	);
}

export default Post;