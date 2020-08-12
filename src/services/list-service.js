import React from 'react'

export  class ListService extends React.Component {
  constructor(props){
    super(props);
  }
    
   _apiBaseTwo = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

   async getList() {

      const res = await fetch(`${this._apiBaseTwo}`);
      if (!res.ok) {
        throw new Error(`У Нас Ошибка Босс`)
      }
      return await res.json();
    }

   async getName(){
      const res = await this.getList()
      return res

   }

 

    
}