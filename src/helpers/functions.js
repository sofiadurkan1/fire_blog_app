import { useEffect, useState } from 'react';
import firebase from './firebase';
import { succesNotify } from './toastNotify';

export const addInfo = (info) => {
  const blogRef = firebase.database().ref('blog');
  blogRef.push(info);
  succesNotify('Added Successfully!');
};

export const useFetch = () => {
  const [blogList, setBlogList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const blogRef = firebase.database().ref('blog');
    blogRef.on('value', (snapshot) => {
      const blogs = snapshot.val();
      //console.log({ contacts });
      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);

  return { blogList: blogList, isLoading };
};

export const deleteHandler = (id) => {
  const blogRef = firebase.database().ref('blog').child(id);
  blogRef.remove();
  succesNotify('Deleted Successfully!');
};

export const updateInfo = (info) => {
  const blogRef = firebase.database().ref('blog').child(info.id);
  blogRef.update(info);
  succesNotify('Updated Successfully!');
};
