import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, StyleSheet } from "react-native";

interface Pills {
  id: number;
  title: string;
  text: string;
  category: string;
  photo: string;
  from: string;
}

const PillsScreen = () => {
  const route = useRoute();
  const { id, title, text, category, photo, from } = route.params as Pills;

  return (
    <ScrollView contentContainerStyle={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default PillsScreen;
