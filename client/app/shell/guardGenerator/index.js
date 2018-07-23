import React from 'react';
import {Flex} from 'reflexbox';
import {withStyles} from 'material-ui/styles';
import {compose} from 'recompose';

const buttonProperties = {
    width: 200,
    color: '#f74d4d',
    dropColor: '#e24f4f',
    dropSize: 15
};

const styles = {
    redButton : {
        width: buttonProperties.width,
        height: buttonProperties.width - buttonProperties.width/10,
        lineHeight: buttonProperties.width,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        background: buttonProperties.color,
        boxShadow: `0 ${buttonProperties.dropSize}px ${buttonProperties.dropColor}`,
        '&:active': {
            boxShadow: `0 0 ${buttonProperties.dropColor}`,
            transform: `translate(0px, ${buttonProperties.dropSize}px)`,
            transition: '0.1s all ease-out'
        }
    }
}

export default compose(withStyles(styles))(({classes: {redButton}}) => (
    <Flex auto column align='center' justify='center'>
        <div className={redButton}>
        </div>
    </Flex>
))