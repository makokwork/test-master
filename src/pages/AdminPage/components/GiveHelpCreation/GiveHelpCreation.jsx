import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Tablet } from './ProductsTablet';
import { ProductsAPI } from '../../../../API';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../store/features/products';

const GiveHelpCreation = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);

  const handleCreate = () => {
    const productFormData = new FormData();
    
    productFormData.set('name', name);
    productFormData.set('price', price);
    productFormData.set('preview_image', file);

    ProductsAPI.create(productFormData)
      .then(product => dispatch(addProduct({ product })))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление товаров на странице "Помочь другим"</h2>
                <input 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  name="text" 
                  type="text" 
                  placeholder="Введите название товара" 
                />
                <input 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)}
                  name="text" 
                  type="text" 
                  placeholder="Введите его цену (только число!)" 
                />
                <div className="button-form">
                  <input 
                    onChange={(e) => setFile(e.target.files[0])} 
                    className="input-file" 
                    type="file" 
                  />
                </div>
                <Button size="large" variant="contained" onClick={handleCreate}>
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Tablet />
    </div>
  );
};

export default GiveHelpCreation;
