import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import BoardGame from './../../components/BoardGame/BoardGame';
import Player from './../../components/Player/Player';
import './MemoryGame.css';

class MemoryGame extends Component {
  render() {
    const { player1, player2, turn } = this.props;

    return (
      <>
        <Row className="w100vw h100vh">
          <Col span={6}>
            <Player player={player1} turn={turn} />
          </Col>
          <Col span={12}>
            <BoardGame></BoardGame>
          </Col>
          <Col span={6}>
            <Player player={player2} turn={turn} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { player1, player2, turn } = state.player;
  return {
    player1,
    player2,
    turn,
  };
};

export default connect(mapStateToProps)(MemoryGame);