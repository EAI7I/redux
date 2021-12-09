import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'
import { useState } from 'react';


export const PostForm = (posts) => {
    const [data, setData] = useState({title:''});

    const submitHandler = (e) => {
        e.preventDefault();
        const {title} = data;

        if (!title.trim()) {
          return posts.showAlert('Название поста не может быть пустым')
        }

        const newPost = {
          title, id: Date.now().toString()
        }

        posts.createPost(newPost)
        setData({title:''})
    }

    const changeInputHandler = (e) => {
      e.persist() //на постоянное хранение
      setData(prev => ({...prev, ...{[e.target.name]:e.target.value}}))
    }


    return (
      <form onSubmit={submitHandler}>

        {posts.alert && <Alert text={posts.alert} />}

        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={data.title}
            name="title"
            onChange={changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
}

const mapDispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
