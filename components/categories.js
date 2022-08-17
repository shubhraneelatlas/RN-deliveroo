import { ScrollView, Text, StyleSheet} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal style={styles.CardContainer} showsHorizontalScrollIndicator={false} className="space-x-2">
      <CategoryCard imageURL="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg" title="Pizza"/>
      <CategoryCard imageURL="https://image.shutterstock.com/shutterstock/photos/1937661397/display_1500/stock-photo-assorted-sushi-nigiri-and-maki-big-set-on-slate-a-variety-of-japanese-sushi-with-tuna-crab-1937661397.jpg" title="Sushi"/>
      <CategoryCard imageURL="https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200" title="Desert"/>
      <CategoryCard imageURL="https://c.ndtvimg.com/2022-06/fm8hjelo_biryani_120x90_29_June_22.png?downsize=200:155" title="Biryani"/>
      <CategoryCard imageURL="https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg" title="Spaghetti"/>
      <CategoryCard imageURL="https://nithisclickncook.com/wp-content/uploads/2021/06/Chicken-Lollipop-6.jpg" title="Chinese"/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    CardContainer:{
        paddingHorizontal: 15,
        paddingTop: 10,
    }
});
export default Categories