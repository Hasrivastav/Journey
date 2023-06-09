import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { PlusOutlined, DeleteOutlined, LikeOutlined, LikeFilled, EditOutlined } from '@ant-design/icons';
import 'react-vertical-timeline-component/style.min.css';
import axios from 'axios';
import { Upload, Form, Input, Button, Modal } from 'antd';
import Compressor from 'compressorjs';
import '../styles/timeline.scss';
import Loader from './loader';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [image, setImage] = useState(null);
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hiddenItems, setHiddenItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editVisible, setEditVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTimelineData();
  }, []);

  const fetchTimelineData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://journey-backend2.onrender.com/api/v1/timeline/getAll');
      setTimelineData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleImageUpload = (file) => {
    setLoading(true);
    new Compressor(file, {
      quality: 0.6, // Adjust the quality setting to reduce file size
      success(result) {
        setImage(result);
        setLoading(false);
      },
      error(err) {
        console.log(err.message);
        setLoading(false);
      },
    });
  };

  const handleImageReset = () => {
    setImage(null);
  };


  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true); 
      const formData = new FormData();
      formData.append('image', image);
      formData.append('year', year);
      formData.append('title', title);
      formData.append('description', description);

      await axios.post('https://journey-backend2.onrender.com/api/v1/timeline/new', formData);

      setImage(null);
      setYear('');
      setTitle('');
      setDescription('');
      

      fetchTimelineData();
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // Set loading state to false when the request is fulfilled
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://journey-backend2.onrender.com/api/v1/timeline/post/${id}`);
      fetchTimelineData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCollapse = (id) => {
    if (hiddenItems.includes(id)) {
      setHiddenItems(hiddenItems.filter((item) => item !== id));
    } else {
      setHiddenItems([...hiddenItems, id]);
    }
  };

  const handleEdit = (id) => {
    const post = timelineData.find((data) => data._id === id);
    if (post) {
      setEditItemId(id);
      setTitle(post.title);
      setDescription(post.description);
      setYear(post.year);
      setEditVisible(true);
    }
  };

  const handleEditCancel = () => {
    setEditItemId(null);
    setTitle('');
    setDescription('');
    setYear('');
    setEditVisible(false);
  };

  const handleEditSubmit = async () => {
    try {
      const updatedData = {
        year: year,
        title: title,
        description: description,
      };
  
      await axios.put(`https://journey-backend2.onrender.com/api/v1/timeline/post/${editItemId}`, updatedData);
  
      handleEditCancel();
      fetchTimelineData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    try {
      const post = timelineData.find((data) => data._id === id);
      const liked = !post.liked;
  
      // Update the like status in the database
      await axios.put(`https://journey-backend2.onrender.com/api/v1/timeline/post/${id}/like`, { liked });
  
      // Fetch the updated timeline data
      fetchTimelineData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="timeline">
         {loading && <Loader />}
      <div style={{ marginBottom: '16px' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Upload
          beforeUpload={(file) => {
            handleImageUpload(file);
            return false;
          }}
        >
          <div className="timeline-header">
    <Button
    
  className="button-71"

  // size="medium"
  disabled={image || loading}
>
 ADD TO YOUR TIMELINE
</Button>

      </div>
        </Upload>
      </div>
      {image && (
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Year">
            <Input value={year} onChange={handleYearChange} />
          </Form.Item>
          <Form.Item label="Title">
            <Input value={title} onChange={handleTitleChange} />
          </Form.Item>
          <Form.Item label="Description">
            <Input value={description} onChange={handleDescriptionChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add to Timeline
            </Button>
            <Button onClick={handleImageReset}>
        Reset Image
      </Button>
          </Form.Item>
        </Form>
      )}
      <VerticalTimeline>
        {timelineData.map((data) => (
          !hiddenItems.includes(data._id) && (
            <VerticalTimelineElement
              key={data._id}
              className="vertical-timeline-element"
              date={data.year}
              onClick={() => handleCollapse(data._id)}
              iconStyle={{ background: '#990011', color: '#990011' }}
            >
              {editItemId === data._id && (
                <Modal
                  title="Edit Post"
                  visible={editVisible}
                  onCancel={handleEditCancel}
                  onOk={handleEditSubmit}
                >
                  <Form layout="vertical">
                    <Form.Item label="Year">
                      <Input value={year} onChange={handleYearChange} />
                    </Form.Item>
                    <Form.Item label="Title">
                      <Input value={title} onChange={handleTitleChange} />
                    </Form.Item>
                    <Form.Item label="Description">
                      <Input value={description} onChange={handleDescriptionChange} />
                    </Form.Item>
                  </Form>
                </Modal>
              )}
              <div className="vertical-timeline-content">
                <div></div>
                <img src={data.image} alt="Event" className="vertical-timeline-image"  />
                <h3 className="vertical-timeline-element-title">{data.title}</h3>
                <p className="vertical-timeline-element-description">{data.description}</p>
                <div className="vertical-timeline-icons">
                  <DeleteOutlined onClick={() => handleDelete(data._id)} className="timeline-icon" />
                  {data.liked ? (
                    <LikeFilled
                      onClick={() => handleLike(data._id)}
                      className="timeline-icon"
                      style={{ color: 'red' }}
                    />
                  ) : (
                    <LikeOutlined
                      onClick={() => handleLike(data._id)}
                      className="timeline-icon"
                    />
                  )}
                  <EditOutlined onClick={() => handleEdit(data._id)} className="timeline-icon" />
                </div>
              </div>
            </VerticalTimelineElement>
          )
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
