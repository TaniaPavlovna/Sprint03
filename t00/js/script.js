let superTeam = {
    title : '',
    leader : '',
    membes : [],
    memberCount : '',
    agenda : '',
    isEvil : ''
};
function team(){ //функция выводит все значения обьекта через prompt, кроме memberCount.
superTeam.title = prompt('title');
superTeam.leader = prompt('leader');
superTeam.membes = prompt('members:separate with comma').split(','); //просит ввести имена через запьятую.
superTeam.agenda = prompt('agenda');
superTeam.isEvil = prompt('isEvil true or false');
    //выводим через логическое значиние.
    if (superTeam.isEvil == 'true') {
        superTeam.isEvil = Boolean(true)
    } else if (superTeam.isEvil == 'false'){
        superTeam.isEvil = Boolean(false)
    } else {
        alert('only true or false\n repiat all value');
        team();
};
superTeam.memberCount = superTeam.membes.length; //вычесляет общее количество участников + лидер.
}
team();
alert(`Here's the team:\nname - ${superTeam.title}\nleader - ${superTeam.leader}\nmembers - ${superTeam.membes}\nmemberCount - ${superTeam.memberCount}\nagenda - ${superTeam.agenda}\nisEvil - ${superTeam.isEvil}\n`);
