import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {


  ciclos : Ciclo[] = [];
  usuarios : Usuario[] = [];

  disponibilidad: Disponibilidad = {
    usuario:{
      idUsuario:0,
    },
    ciclo:{
      idCiclo:0,
    }
  };

  constructor(private usuarioService:UsuarioService, private cicloService:CicloService,private  disponibilidadService:DisponibilidadService) { 
    this.usuarioService.listarUsuarios().subscribe(
          (usuarios) => this.usuarios = usuarios
    );
    this.cicloService.listarCiclo().subscribe(
      (ciclos) => this.ciclos = ciclos
    );
  }

  registrarDisponibilidad(){
    console.log(this.disponibilidad);
    

    this.disponibilidadService.registrar(this.disponibilidad).subscribe(
        response => {
            console.log(response.mensaje);
            alert(response.mensaje);
          },
          error => {
            console.log(error);
          },
    );
  }

  ngOnInit(): void {
  }

}
