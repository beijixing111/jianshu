import styled from 'styled-components';
import Color, { relative, fixed, absolute } from '../cssStyle';
import logoPic from '../../statics/images/logo.png';

const headerHeight = 56;

export const HeaderContent = styled.div `
	${fixed}; left: 0; top: 0;
	width: 100%; background: ${Color.white};
	height: ${headerHeight}px; 
	border-bottom: 1px solid #f0f0f0;
	z-index: 200; margin-bottom: 20px;
`;

export const HeaderWrapper = styled.div `
	min-width: 768px; height: ${headerHeight};
	max-width: 1440px;
	margin: 0 auto; 
	${relative};
`;
export const Logo = styled.div `
  float: left;
	width: 100px;
	height: ${headerHeight}px;
	display: block;
	background: url(${logoPic});
	background-size: cover;
`;
export const Nav = styled.div `
	width: 960px;
	height: 100%; 
	box-sizing: border-box;
	margin: 0 auto;
`;
export const NavItem = styled.div `
	line-height: ${headerHeight}px;
	padding: 0 15px; 
	font-size: 18px;
	color: #333;
	cursor: pointer;
	&.left{
		float: left;
	}
	&.rig{
		float: right;
		color: #969696;
	}
	&.margin-rig{
		margin-right: 20px;
	}
	&.active{
		color: ${Color.yellow};
	}
	i{
		margin-right: 5px; font-size: 18px;
	}
`;

export const SearchWrapper = styled.div `
	float: left;
	${relative};
	.zoom {
		${absolute};
		right: 5px; 
		bottom: 5px;
		width: 30px; 
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		&.focused{
			background: #777;
			color: #fff;
		}
	}
`;
export const NavSearch = styled.input.attrs({ placeholder: '搜索' }) `
	width: 240px;
	height: 38px;
	border: none; 
	outline: none;
	border-radius: 19px;
	margin-top: 9px; 
	padding: 0 30px 0 20px;
	box-sizing: border-box;
	background: #eee;
	color: #666;
	font-size: 14px;
	&::placeholder{
		color: #999;
	}
	&.focused{
		width: 316px;
	}
	&.slide-enter{
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 316px;
	}
	&.slide-exit{
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div `
	${absolute};
	left: 0;
	top: ${headerHeight + 1}px;
	width: 260px;
	min-height: 100px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0, .2);
	background: #fff;
	border-radius: 4px;
	box-sizing: border-box;
	&:before{
		display: block; content: '';
		${absolute}; top: 0; left: 27px;
		width: 10px; height: 10px; 
		top: -5px; z-index: -1;
		box-shadow: 0 0 8px rgba(0,0,0,.5);
		background: ${Color.white};
		transform: rotate(45deg);
	}
	&:after{
		content: "";
    ${absolute};
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
	}
`;

export const SearchInfoTitle = styled.div `
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span `
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin{
		display: block;
		float: left;
		font-size: 12px; 
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div `
	overflow: hidden;
`;

export const SearchInfoItem = styled.a `
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	cursor: pointer;
`;
export const Addition = styled.div `
	${absolute};
	right: 0; top: 0;
	height: 56px;
`;
export const Button = styled.div `
	float: right;
	margin-top: 7px;
	margin-right: 20px;
	padding: 6px 12px; 
	min-width: 60px; 
	border-radius: 20px;
	font-size: 14px;
	line-height: 24px;
	border: 1 px solid ${Color.yellow};
	text-align: center;
	vertical-align: middle;
	&.reg{
		color: ${Color.yellow}; 
		border: 1px solid ${Color.yellow};
		font-size: 16px;
	}
	&.writting{
		color: #fff;
		background: ${Color.yellow};
		i{
			font-size: 20px;
			font-weight: 600;
			vertical-align: middle;
		}
	}
`;