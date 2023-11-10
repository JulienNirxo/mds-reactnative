import { StyleSheet } from "react-native";
import { View, Image, Text, TextInput, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";

function Exo2() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => {
    // Compare password and confirmPassword, if they are not the same, set the confirmPassword error to "Passwords must match"
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Le mot de passe et la confirmation doivent être identiques",
      });
      return;
    }
    alert(
      `Prénom: ${data.firstName}\nNom: ${data.lastName}\nMot de passe: ${data.password}\nInscription Enregistrée`
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Inscription</Text>
        <Image
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wagner-visuell.de%2Fwp-content%2Fuploads%2F2019%2F04%2F181214-Platzhalter-Portrait-Frau_.jpg&f=1&nofb=1&ipt=e830ff7c3f453b97cc2f2deb27bb7afb00cbf77f2712b1445ca1c48d23bba949&ipo=images",
          }}
          style={styles.image}
        ></Image>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Prénom*"
            />
          )}
          name="firstName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && (
          <Text style={styles.errorText}>Champs obligatoire.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nom*"
            />
          )}
          name="lastName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.lastName && (
          <Text style={styles.errorText}>Champs obligatoire.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Mot de passe*"
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.errorText}>Champs Obligatoire.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Confirmation du mot de passe*"
              secureTextEntry={true}
            />
          )}
          name="confirmPassword"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>
            {errors.confirmPassword.message || "Champs bligatoire."}
          </Text>
        )}
        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Envoyer</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    padding: 10,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  submitButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    width: "50%",
    borderWidth: 1,
    borderColor: "gray",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "gray",
    textAlign: "center",
  },
});

export default Exo2;