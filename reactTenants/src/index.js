import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author='Ada' time="today" image={faker.image.avatar()} content="This is pretty neat" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Maple' time="yesterday" image={faker.image.avatar()} content="This really is cool" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Lazuli' time="wednesday" image={faker.image.avatar()} content="Hello World" />
      </ApprovalCard>

    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))