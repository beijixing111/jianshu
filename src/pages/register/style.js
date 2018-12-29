import styled from 'styled-components';
import Color, { relative, fixed, absolute } from '../../common/cssStyle';

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
	margin: 20px auto 30px;
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
	margin: 25px auto;
	box-sizing: border-box;
`;

export const Button = styled.div `
	display: block;
	width: 260px; 
	height: 50px;
	line-height: 50px;
	color: #fff;
	background: #3194d0;
	border-radius: 5px;
	margin: 30px auto;
	cursor: pointer;
	text-align: center;
	&:hover{
		background: #1972a8;
	}
`;

export const Layerbg = styled.div `
	position: fixed; 
	left: 0; right: 0;
	bottom: 0; top: 0;
	background: rgba(0,0,0,.5);
	z-index: 1;
`;

export const LayerWrapper = styled.div `
	position: fixed;
	left: 50%; top: 50%;
	width: 240px;
	height: 100px;
	background: #fff;
	border-radius: 10px; 
	margin: -50px 0 0 -120px;
	box-shadow: 0 0 5px #ccc;
	color: #353535;
	z-index: 99;
`;

export const LayerTitle = styled.div `
	width: 100%; height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
`;
export const LayerContent = styled.div `
	padding: 20px 20px; text-align: center;
	font-size: 14px;
`;
