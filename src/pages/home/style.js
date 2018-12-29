import styled from 'styled-components';
import { absolute } from '../../common/cssStyle';


export const HomeWrapper = styled.div `
	width: 960px;
	overflow: hidden;
	margin: 0 auto;
`;
export const HomeLeft = styled.div `
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left; 
`;
export const PrevButton = styled.div `
	${absolute};
	left: 0;
	top: 50%;
	z-index: 99;
	margin-top: -20px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	cursor: pointer; 
	background: rgba(0,0,0,.25);
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	i{
		color: #fff;
		font-size: 30px;
	}
`;

export const NextButton = styled.div `
	${absolute};
	right: 0;
	top: 50%;
	z-index: 99;
	margin-top: -20px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	cursor: pointer;
	background: rgba(0, 0, 0, .25);
	i{
		color: #fff;
		font-size: 30px;
	}
`;

export const HomeRight = styled.div `
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div `
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	cursor: pointer;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div `
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.pic{
		width: 125px; height：100px;
		float: right;
		border-radius: 5px;
	}
`;
export const ListInfo = styled.div `
	width: 500px; 
	float: left;
	.title{
		line-height: 28px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
	}
	.desc{
		line-height: 24px;
		color: #999;
		font-size: 14px;
	}
`;

export const RecommendWrapper = styled.div `
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div `
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl}) no-repeat;
	background-size: cover;
`;

export const WriterWrapper = styled.div `
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 200px;
	line-height: 200px;
	text-align: center;
`;

export const LoadMore = styled.div `
	width: 100%;
	height: 40px;
	cursor: pointer;
	line-height: 40px;
	background: #a5a5a5;
	border-radius: 20px;
	text-align: center;
	color: #fff;
	margin: 30px 0;
`;

export const BackTop = styled.div `
	position: fixed;
	cursor: pointer;
	bottom: 100px;
	right: 30px;
	border-radius: 50%; 
	width: 50px;
	height: 50px;
	border: 1px solid #ccc;
	line-height: 50px;
	text-align: center; 
	i{
		font-size: 22px;
	}
`;