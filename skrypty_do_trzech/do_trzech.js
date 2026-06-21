$(document).ready(()=>{
	
	$("#zacznij").click(()=>{
		$("#zacznij").slideUp(100);
		$("#pole_z_gra").show(1200);
	});
	
	let runda = 0;
	let wygrana1 = 0;
	let przegrana1 = 0;
	let wygrana2 = 0;
	let przegrana2 = 0;
	let remis = 0;
	let obraz;
	
	$("input[value='Kamień']").click(()=>{
		obraz = Math.floor(Math.random()*3);
		$("#gracz").html("<img src='./obrazki_do_trzech/gra0.webp' alt='Kamień'/>");
		$("#komputer").html("<img src='./obrazki_do_trzech/gra"+obraz+".webp'/>");
		$("#u").text("Kamień");
		
		switch(obraz){
			case 0: $("#k").text("Kamień"); runda++; $("#ktora").text(runda); remis++; $(".remis").text(remis); $("#wygrana2").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000); $("#wygrana1").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000); break;
			case 1: $("#k").text("Papier"); runda++; $("#ktora").text(runda); wygrana2++; $("#w2").text(wygrana2); przegrana1++; $("#p1").text(przegrana1); $("#wygrana2").text("Rundę "+runda+" wygrywa komputer!").slideDown(1000).slideUp(3000); break;
			default: $("#k").text("Nożyce"); runda++; $("#ktora").text(runda); wygrana1++; $("#w1").text(wygrana1); przegrana2++; $("#p2").text(przegrana2); $("#wygrana1").text("Rundę "+runda+" wygrywa użytkownik!").slideDown(1000).slideUp(3000);
		}
		
		koniec();
	});
	
	$("input[value='Papier']").click(()=>{
		obraz = Math.floor(Math.random()*3);
		$("#gracz").html("<img src='./obrazki_do_trzech/gra1.webp' alt='Papier'/>");
		$("#komputer").html("<img src='./obrazki_do_trzech/gra"+obraz+".webp'/>");
		$("#u").text("Papier");
		
		switch(obraz){
			case 0: $("#k").text("Kamień"); runda++; $("#ktora").text(runda); wygrana1++; $("#w1").text(wygrana1); przegrana2++; $("#p2").text(przegrana2); $("#wygrana1").text("Rundę "+runda+" wygrywa użytkownik!").slideDown(1000).slideUp(3000); break;
			case 1: $("#k").text("Papier"); runda++; $("#ktora").text(runda); remis++; $(".remis").text(remis); $("#wygrana2").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000); $("#wygrana1").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000); break;
			default: $("#k").text("Nożyce"); runda++; $("#ktora").text(runda); wygrana2++; $("#w2").text(wygrana2); przegrana1++; $("#p1").text(przegrana1); $("#wygrana2").text("Rundę "+runda+" wygrywa komputer!").slideDown(1000).slideUp(3000);
		}
		
		koniec();
	});
	
	$("input[value='Nożyce']").click(()=>{
		obraz = Math.floor(Math.random()*3);
		$("#gracz").html("<img src='./obrazki_do_trzech/gra2.webp' alt='Nożyce'/>");
		$("#komputer").html("<img src='./obrazki_do_trzech/gra"+obraz+".webp'/>");
		$("#u").text("Nożyce");
		
		switch(obraz){
			case 0: $("#k").text("Kamień"); runda++; $("#ktora").text(runda); wygrana2++; $("#w2").text(wygrana2); przegrana1++; $("#p1").text(przegrana1); $("#wygrana2").text("Rundę "+runda+" wygrywa komputer!").slideDown(1000).slideUp(3000); break;
			case 1: $("#k").text("Papier"); runda++; $("#ktora").text(runda); wygrana1++; $("#w1").text(wygrana1); przegrana2++; $("#p2").text(przegrana2); $("#wygrana1").text("Rundę "+runda+" wygrywa użytkownik!").slideDown(1000).slideUp(3000); break;
			default: $("#k").text("Nożyce"); runda++; $("#ktora").text(runda); remis++; $(".remis").text(remis); $("#wygrana2").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000); $("#wygrana1").text("Runda "+runda+" zakończona remisem!").slideDown(1000).slideUp(3000);
		}
		
		koniec();
	});

	function koniec(){
		if(wygrana1 == 3){
			$("input[value='Kamień']").attr("disabled",true).css("cursor","default");
			$("input[value='Papier']").attr("disabled",true).css("cursor","default");
			$("input[value='Nożyce']").attr("disabled",true).css("cursor","default");
			setTimeout(()=>{alert("Gratulacje, wygrałeś/łaś z komputerem, aby zagrać ponownie przeładuj stronę!");},4000);
		}else if(wygrana2 == 3){
			$("input[value='Kamień']").attr("disabled",true).css("cursor","default");
			$("input[value='Papier']").attr("disabled",true).css("cursor","default");
			$("input[value='Nożyce']").attr("disabled",true).css("cursor","default");
			setTimeout(()=>{alert("Porażka, przegrałeś/łaś z komputerem, aby spróbować jeszcze raz odśwież stronę!");},4000);
		}
	}
});