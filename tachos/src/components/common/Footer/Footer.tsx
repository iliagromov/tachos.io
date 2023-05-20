import React, { FC } from 'react';

import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import { ReactSVG } from 'react-svg';

import './Footer.sass';

type FooterProps = {
}

const FooterComponent: FC<FooterProps> = () => {
	const {
		logoFooter
	} = useStaticQuery(graphql`
		query  {
			logoFooter: file(relativePath: { eq: "logo-footer.svg" }) {
			  publicURL
			  name
		  }
		}`);
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer-inner">
					<div className="footer__slogan">
						<div className="page-svg">
							{/* <ReactSVG src={logoFooter.publicURL} /> */}
						</div>
					</div>
					<div className="footer__row">
						<div className="footer__city">
							<div className="page-title-caption-4">Moscow, 2023</div>
						</div>
						<div className="footer__nav">
							<nav className="nav"><a className="page-link" href="">
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
						<a className="page-svg" href="/">
							{/* <ReactSVG src={logoFooter.publicURL}/> */}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}


export { FooterComponent };

