import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                <img
                    src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/15107468_994850563993986_1244574238040743004_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=M8c2tW6jti8AX8irb8x&_nc_ht=scontent-bos3-1.xx&oh=0b60242fb37076302b7146f36f132bfd&oe=5F995F8B"
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">
                    <h1>Student</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | React | NodeJS | Express</p>
                    <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="https://github.com/tkim30201" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;