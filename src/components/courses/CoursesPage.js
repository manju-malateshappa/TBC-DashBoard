import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        course: {title: " "}
    };
    this.onTtileChange = this.onTtileChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTtileChange(event) {
    const course = this.state.course;
    course.title = event.target.title;
    this.setState({course: course});
  }

  onClickSave() {
      alert('Saving ${this.state.course.title}');
  }

  render() {
    return (
      <div>
        <h1>The Group Stories</h1>
        <h2> Add stories</h2>
        <input
            type="text"
            onChange={this.onTtileChange}
            value={this.state.course.title} />
        <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
