import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">
			Built with:{' '}
			<OutboundLink
				href="https://www.gatsbyjs.org/"
				target="_blank"
				rel="noreferrer"
			>
				Gatsby.js
			</OutboundLink>
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool,
};

export default Footer;
