import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SectionStyle = styled.section`
    display: flex;
    justify-content: center;
`;



const Section = (props) => {
    const renderInnerWrapper = () => (<div className="innerWidth">{props.children}</div> );
    
    
    return (
        <SectionStyle innerWidth={props.innerWidth}>
            {props.innerWidth ? renderInnerWrapper() : props.children}
        </SectionStyle>
    )
}

Section.propTypes = {
    innerWidth: PropTypes.number
};

export default Section
