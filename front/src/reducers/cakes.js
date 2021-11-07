// import data from 'src/data';
import { FETCH_ALL_CAKES, FETCH_ALL_CAKES_SUCCESS, FETCH_CAKE_SUCCESS, SAVE_ID } from "../actions/cakes";

export const initialState = {
  // list: [ {_id: '617d4d8f2352f138f62cdb63', name: 'Cake 8', thumbnail: 'https://zupimages.net/up/21/43/iq1t.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  // {_id: '617d4d8f2352f138f62cdb64', name: 'Cake 9', thumbnail: 'https://zupimages.net/up/21/43/a5eo.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb62', name: 'Cake 7', thumbnail: 'https://zupimages.net/up/21/43/hn37.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb5c', name: 'Cake 1', thumbnail: 'https://zupimages.net/up/21/43/ofo9.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb66', name: 'Cake 11', thumbnail: 'https://zupimages.net/up/21/43/dgbo.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb5f', name: 'Cake 3', thumbnail: 'https://zupimages.net/up/21/43/be1c.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb61', name: 'Cake 6', thumbnail: 'https://zupimages.net/up/21/43/j7r1.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb65', name: 'Cake 10', thumbnail: 'https://zupimages.net/up/21/43/susn.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb5e', name: 'Cake 2', thumbnail: 'https://zupimages.net/up/21/43/sono.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb67', name: 'Cake 12', thumbnail: 'https://zupimages.net/up/21/43/q03i.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb60', name: 'Cake 5', thumbnail: 'https://zupimages.net/up/21/43/xz2u.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  //  {_id: '617d4d8f2352f138f62cdb5d', name: 'Cake 2', thumbnail: 'https://zupimages.net/up/21/43/rwa4.jpg', season: 'Summer', description: 'Lorem ipsum dolor sit amet. Hic galisum quod et re…e ipsa rem quia pariatur et neque necessitatibus.'},
  
  // ],
  list: [],
}

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CAKES: {
      return {
        ...currentState,
      }
    }
    
    case FETCH_ALL_CAKES_SUCCESS: {
      return {
        ...currentState,
        list: action.cakes,
      }
    }
    
    case FETCH_CAKE_SUCCESS:
      return {
        name: action.cake.name,
        thumbnail: action.cake.thumbnail,
        season: action.cake.season,
        description: action.cake.description,
        idCake: action.cake.idCake
      }
    case SAVE_ID:
      return {
        idCake: action.idCake,
      }
    default:
      return currentState;
  }
}

export default reducer;
