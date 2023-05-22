import React, { FC } from 'react';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { ReactSVG } from 'react-svg';

import './Footer.sass';

type FooterProps = {
}

const FooterComponent: FC<FooterProps> = () => {
	const {
		logoFooter,
		iconFire,
		iconFeedback
	} = useStaticQuery(graphql`
		query  {
			logoFooter: file(relativePath: { eq: "logo-footer.svg" }) {
			  publicURL
			  name
		  	}
			iconFire: file(relativePath: { eq: "icon-fire.svg" }) {
			  publicURL
			  name
		  	}
			iconFeedback: file(relativePath: { eq: "icon-feedback.svg" }) {
			  publicURL
			  name
		  	}
		}`);

	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer-inner">
					<div className="footer__slogan">
						<div className="footer__slogan-main">
							<ReactSVG 
							className="page-svg" 
							src={logoFooter.publicURL} 
							/>
						</div>
						<div className="footer__slogan-fire">
							<ReactSVG className="page-svg" src={iconFire.publicURL} />
						</div>
						
					</div>
					<div className="footer__row">
						<div className="footer__city">
							<div className="page-title-caption-4">Moscow, 2023</div>
						</div>
						<div className="footer__nav">
							<nav className="nav">
								<a className="page-link" href="">
								<div className="page-title-caption-4">Главная </div>
							</a><a className="page-link" href="">
									<div className="page-title-caption-4">Кейсы </div>
								</a><a className="page-link" href="">
									<div className="page-title-caption-4">Команда </div>
								</a><a className="page-link" href="">
									<div className="page-title-caption-4">Карьера</div>
								</a></nav>
						</div>
						<div className="footer__author">
							<a className="page-link" href="">
								<div className="page-title-caption-4">Design – MAX</div>
							</a></div>
					</div>
					<div className="footer__feedback">
						<ReactSVG className="page-svg" src={iconFeedback.publicURL} />
					</div>
				</div>
			</div>
		</footer>
	);
}
export { FooterComponent };