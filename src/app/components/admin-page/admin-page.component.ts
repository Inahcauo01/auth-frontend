import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../models/member";
import {MemberService} from "../../services/member/member.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit{

constructor(private http:HttpClient, private memberService: MemberService) {}

  allMembers: Member[] = [];

  ngOnInit(){
    this.loadAllMembers();
  }

  loadAllMembers(): void {
    this.memberService.getMembers().subscribe((data: Member[]) => {
      this.allMembers = data;
    });
  }

}
