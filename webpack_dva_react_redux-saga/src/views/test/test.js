import React from 'react';
import { connect } from 'dva';

function test() {
  return (
    <div className='test'>
      wfsdfsdf
    </div>
  );
}

test.propTypes = {
};

export default connect()(test);