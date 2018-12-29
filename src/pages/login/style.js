import styled from 'styled-components';
import Color from '../../common/cssStyle';
import logoPic from '../../statics/images/logo.png';

export const LoginWrapper = styled.div `
	position: fixed;
	z-index: 0;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: ${Color.bodybg};
`;
export const Logo = styled.div `
  position: absolute;
	left: 100px;
	top:0;
	width: 160px;
	height: 80px;
	display: block;
	background: url(${logoPic});
	background-size: cover;
`;

export const LoginBox = styled.div `
	width: 500px;
	height: 400px;
	margin: 150px auto;
	background: #fff;
	padding: 20px 0;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;
export const TabText = styled.div ` 
	display: flex; 
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: #353535;
`;
export const Toptitle = styled.div `
	width: 400px; 
	height: 50px;
	display: flex; 
	justify-content: center;
	align-items: center; 
	margin: 20px auto 40px;
	& a{
		display: flex;
		height: 100%;
		width: 86px;
		justify-content: center;
		align-items: center;
		.active{
			font-weight: bold;
			color: #ea6f5a;
			border-bottom: 2px solid #ea6f5a;
		}
	}
`;

export const Input = styled.input `
	display: block;
	width: 260px; 
	height: 50px;
	line-height: 50px;
	background: #fefefe;
	border: 1px solid #ccc;
	outline: none;
	padding: 0 10px;
	border-radius: 5px;
	color: #777;
	margin: 0 auto 0;
	box-sizing: border-box;
`;

export const ErrorTip = styled.p`
	text-align: center;
	color: ${Color.errcol}; 
	height: 30px;
	line-height: 30px;
	font-size: 14px;
`;

export const Button = styled.div `
	display: block;
	width: 260px; 
	height: 50px;
	line-height: 50px;
	color: #fff;
	background: #2196f3;
	border-radius: 5px;
	margin: 20px auto;
	cursor: pointer;
	text-align: center;
	&:hover{
		background: #1184e1;
	}
`;