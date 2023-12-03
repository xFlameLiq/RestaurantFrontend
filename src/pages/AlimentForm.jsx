import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import "../styles/Form.css";
import DropDown from "../components/DropDown";

const AlimentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      type: "",
      price: 0,
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth={"sm"}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
        className="form-container"
      >
        <Grid item className={"form-title"}>
          <Typography component={"h1"} variant={"h5"}>
            Agregar nuevo alimento
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
              <TextField
                label="Nombre"
                type="text"
                name="name"
                {...register("name", {
                  required: "El campo nombre es requerido",
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <DropDown
                register={register}
                errors={errors}
              />

              <TextField
                type="numeric"
                label="Precio"
                name="price"
                {...register("price", {
                  required: "El campo debe ser un numero mayor a 0 ",
                  min: 1,
                })}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
              <TextField
                label="Descripcion"
                type="text"
                name="description"
                {...register("description", {
                  required: "El campo descripcion es requerido",
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <Button type="sumbit" variant="contained" color="primary">
                Registrar
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AlimentForm;
