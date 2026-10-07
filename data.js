const girls = [
  {
    "id": "student-01",
    "name": "Lê Phạm Khánh An",
    "subject": "",
    "greeting": "Gửi Lê Phạm Khánh An,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh An hôm nay cười banh nóc luôn nha! Chúc cậu gặp đúng hội nói chuyện một câu là cười mười phút, ăn đúng món đang thèm, mở túi quà ra là “ê đúng gu mình rồi!” và chụp ảnh tấm nào cũng có người xin vía. Hôm nay cứ vô tư hết cỡ, vui là cười, thích là nhận, đói là ăn; đến lúc về nhà vẫn còn nguyên một chiếc mood siêu vui ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-02",
    "name": "Vũ Thùy An",
    "subject": "",
    "greeting": "Gửi Vũ Thùy An,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thùy An có một ngày đúng kiểu càng trôi càng vui nha! Chúc lúc đang ngáp thì có chuyện làm tỉnh, lúc đang đói thì đồ ăn xuất hiện, lúc đang ngồi yên cũng có người kéo đi tám chuyện. Quà nhận được nhớ mở thật chậm để tận hưởng cảm giác bất ngờ nhé; rồi cười thật đã, kể thật nhiều chuyện vui và cho phép bản thân hôm nay lười một chút cũng được ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-03",
    "name": "Phạm Phương Anh",
    "subject": "",
    "greeting": "Gửi Phạm Phương Anh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Phương Anh gặp được những người hợp cạ tới mức đang định nói “thôi về” mà cuối cùng ngồi thêm hai tiếng nha! Chúc câu nào buột miệng nói ra cũng thành chuyện hài, đi đâu cũng có người bắt đúng tần số, món ăn gọi ra không có món nào thất vọng. Hôm nay cứ vui theo kiểu của cậu: hơi ồn một chút, hơi vô tri một chút, nhưng vui thật nhiều ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-04",
    "name": "Nguyễn Ngọc Anh",
    "subject": "",
    "greeting": "Gửi Nguyễn Ngọc Anh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Anh có một ngày mà tiếng cười xuất hiện còn nhiều hơn thông báo điện thoại nha! Chúc cậu nhận quà đúng gu, bắt được góc ảnh xịn, nghe một câu khen làm vui cả buổi và gặp một chuyện ngớ ngẩn đủ để kể lại mấy lần vẫn buồn cười. Hôm nay chẳng cần giữ hình tượng đâu, cứ thoải mái, cứ cười thật tự nhiên và tận hưởng chiếc 20/10 của mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-05",
    "name": "Đinh Thùy Chi",
    "subject": "",
    "greeting": "Gửi Đinh Thùy Chi,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thùy Chi hôm nay “hên dữ vậy trời” từ đầu đến cuối nha! Chúc đi đâu cũng gặp chuyện thuận lợi, chọn món nào trúng món ngon, bóc quà phát là trúng đúng thứ mình thích, chụp camera thường vẫn xinh và đang định than mệt thì có chuyện vui kéo mood lên liền. Cứ để hôm nay chiều cậu một chút: thích gì vui nấy, cười thật to và không cần nghiêm túc quá đâu ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-06",
    "name": "Nguyễn Khánh Chi",
    "subject": "",
    "greeting": "Gửi Nguyễn Khánh Chi,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh Chi có một ngày nhẹ tênh nhưng niềm vui thì đầy pin nha! Chúc cậu vừa đặt điện thoại xuống là có người rủ tám, vừa nghĩ tới đồ ăn là gặp món ngon, vừa chụp đại một tấm đã có ngay ảnh xài được. Hôm nay cứ chill theo đúng nghĩa: nghe nhạc mình thích, ăn món mình thèm, nói chuyện với người mình quý và cười tới mức quên xem giờ luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-07",
    "name": "Hoàng Lê Ngọc Diệp",
    "subject": "",
    "greeting": "Gửi Hoàng Lê Ngọc Diệp,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Diệp hôm nay gặp toàn những pha “ủa vui vậy!” nha! Chúc giờ ra chơi nào cũng có chuyện để cười, bài kiểm tra nào cũng gặp phần quen, đồ ăn nào cũng đúng vị và quà nào mở ra cũng thấy hợp gu. Cậu cứ giữ nguyên cái năng lượng khiến người khác cũng phải bật cười theo; hôm nay vui thật tự nhiên, chẳng cần lý do luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-08",
    "name": "Vũ Ngọc Diệp",
    "subject": "",
    "greeting": "Gửi Vũ Ngọc Diệp,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Diệp có một ngày đẹp từ mood tới ảnh nha! Chúc cậu mặc gì cũng thấy hợp, chụp góc nào cũng ưng, nói chuyện với ai cũng có chuyện để kể và nhận được một món quà làm mắt sáng lên một chút. Hôm nay cứ để mình được nuông chiều bởi những điều nhỏ xíu: món ngon, lời chúc dễ thương, vài phút cười vô tri và một buổi tối thật vui ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-09",
    "name": "Lê Hạnh Dung",
    "subject": "",
    "greeting": "Gửi Lê Hạnh Dung,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hạnh Dung hôm nay cười thật thoải mái nha! Chúc cậu gặp được đúng kiểu người nói chuyện một lúc là quên mất mình đang mệt, được ăn món mình thích mà chẳng cần cân nhắc, rồi vô tình có một khoảnh khắc buồn cười tới mức nhớ lại vẫn thấy vui. Cứ tận hưởng ngày này thật nhẹ nhàng, thích nói thì nói, muốn cười thì cười và để mọi thứ diễn ra tự nhiên ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-10",
    "name": "Đỗ Nhật Hà",
    "subject": "",
    "greeting": "Gửi Đỗ Nhật Hà,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Nhật Hà hôm nay vừa xinh vừa vui theo kiểu nhìn là biết đang có chuyện hay ho nha! Chúc outfit đúng ý, tóc đúng nếp, camera bắt đúng góc, món ăn gọi ra ngon và quà mở ra không phải kiểu “ừ cũng được” mà là “trời ơi thích!”. Hôm nay cứ như có một ngày nghỉ mini: vui hết mức, chụp vài tấm thật ưng và cười thật đã ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-11",
    "name": "Lê Ngọc Hà",
    "subject": "",
    "greeting": "Gửi Lê Ngọc Hà,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Hà có một ngày thật dịu, thật vui và gặp những điều khiến lòng mình dễ chịu nha! Chúc cậu nghe được một lời khen rất thật, nhận một món quà vừa vặn với sở thích và có một cuộc trò chuyện mà không cần nghĩ xem phải nói gì tiếp theo. Hôm nay cứ thong thả, ăn món mình thích, ngồi cạnh người khiến mình vui và tận hưởng cảm giác được quan tâm ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-12",
    "name": "Nguyễn Thị Thanh Hải",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Thanh Hải,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Hải có một ngày mềm mại như một buổi chiều không phải vội nha! Chúc cậu có thời gian cho một ly nước ngon, một bài nhạc hợp mood, một cuộc trò chuyện thật dễ chịu và một món quà nho nhỏ nhưng mở ra là thấy ấm lòng. Hôm nay cứ nhận lấy những lời chúc thật vui, cười thật nhẹ và để mọi thứ đáng yêu đến bên cậu thật tự nhiên ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-13",
    "name": "Đặng Khánh Huyền",
    "subject": "",
    "greeting": "Gửi Đặng Khánh Huyền,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh Huyền hôm nay được yêu chiều vừa đủ để thấy mình thật đặc biệt nha! Chúc cậu nhận được những lời nói làm mình vui thật lòng, gặp những người tinh tế, ăn một bữa thật ngon và có một khoảng thời gian yên yên đúng sở thích. Không cần gì lớn lao đâu, chỉ cần hôm nay có vài khoảnh khắc khiến cậu mỉm cười một mình là chiếc 20/10 này đã xinh rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-14",
    "name": "Nguyễn Diệp Khanh",
    "subject": "",
    "greeting": "Gửi Nguyễn Diệp Khanh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Diệp Khanh có một ngày đầy những niềm vui bé xíu nhưng cộng lại thành rất nhiều nha! Chúc một câu nói dễ thương làm cậu vui, một món quà nhỏ làm cậu bất ngờ, một cuộc nói chuyện kéo dài hơn dự tính và một bữa ăn ngon đúng lúc. Hôm nay cứ nhẹ nhàng thôi, cười khi vui, ngồi lâu thêm chút khi nói chuyện hợp và tận hưởng thật trọn vẹn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-15",
    "name": "Đào Phương Linh",
    "subject": "",
    "greeting": "Gửi Đào Phương Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Phương Linh hôm nay nhận được đúng kiểu quan tâm mà mình thích nha! Chúc có người nhớ món cậu thích, nhớ điều cậu từng nói, rồi mang tới một niềm vui nho nhỏ đúng lúc. Chúc cả ngày có thật nhiều khoảng dễ chịu: ăn ngon, nói chuyện vui, nghe nhạc hay và được ngồi yên khi muốn. Hôm nay cứ để bản thân được vui thật lòng, chẳng cần phải làm gì đặc biệt ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-16",
    "name": "Lê Hà Linh",
    "subject": "",
    "greeting": "Gửi Lê Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh có một ngày thật trong veo nha! Chúc cậu được nghe những câu khiến lòng nhẹ đi, gặp một người nói chuyện rất hợp và có đủ thời gian để làm mấy điều mình thích. Một món ăn ngon, một bài hát đúng mood, một tấm ảnh nhìn lại thấy vui — vậy là đủ tạo thành một ngày đẹp rồi. Cứ cười thật tự nhiên và tận hưởng từng khoảnh khắc nhỏ nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-17",
    "name": "Nguyễn Hà Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh hôm nay được nghỉ một chút khỏi những chuyện phải nghĩ nhiều nha! Chúc cậu có một buổi chiều thật dễ chịu, một bữa ăn ngon, một cuộc trò chuyện không gượng gạo và một khoảng yên tĩnh đúng lúc. Hôm nay cứ chậm lại một nhịp thôi, không cần cố làm ngày này thật đặc biệt; chỉ cần cậu thấy vui, thấy thoải mái và thấy mình được thương là đủ rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-18",
    "name": "Nguyễn Thị Vân Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Vân Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Vân Linh có một ngày ngọt vừa đủ, không sến mà vẫn thật vui nha! Chúc cậu nhận được một món quà xinh xắn, nghe một câu nói làm lòng vui lên và có ít nhất một lần cười vì một chuyện rất ngớ ngẩn. Hôm nay cứ tận hưởng cảm giác được mọi người nhớ tới mình, được ngồi cạnh người mình thích nói chuyện và được vui theo nhịp của riêng mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-19",
    "name": "Vũ Thái Linh",
    "subject": "",
    "greeting": "Gửi Vũ Thái Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thái Linh hôm nay có thật nhiều khoảng thời gian “được là mình” nha! Chúc cậu muốn nói thì cứ nói, muốn yên thì cứ yên, muốn ăn món gì thì chọn ngay món đó và gặp người nào nói chuyện khiến mình thấy nhẹ lòng. Một ngày đẹp không nhất thiết phải ồn ào; đúng người, đúng mood, đúng món ngon và một nụ cười tự nhiên là quá ổn rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-20",
    "name": "Đoàn Phương Linh",
    "subject": "",
    "greeting": "Gửi Đoàn Phương Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Phương Linh có một ngày thật xinh xắn theo cách rất riêng nha! Chúc cậu nhận được một lời chúc khiến mình thấy được trân trọng, bắt gặp một khoảnh khắc đáng yêu bất ngờ và có thời gian ngồi yên tận hưởng nó. Hôm nay cứ để mọi thứ chậm một chút: ăn ngon, nghe nhạc, nói chuyện với người mình quý và cười thật thoải mái, vì hôm nay là ngày để cậu vui ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-21",
    "name": "Nguyễn Hà Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh hôm nay slay từ lúc bước ra khỏi nhà tới lúc về nha! Chúc outfit lên form, tóc vào nếp, camera mở phát có ảnh đẹp và câu nào đăng story cũng đúng vibe. Quà thì phải đúng gu, đồ ăn phải đúng miệng, mood phải cao. Hôm nay cứ tự tin mà vui, thích gì nhận nấy, chụp gì đăng nấy và tận hưởng cảm giác mình đang có một ngày rất “đỉnh” ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-22",
    "name": "Nguyễn Tú Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Tú Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Tú Mai hôm nay có một chiếc mood không gì phá nổi nha! Chúc đi chơi là gặp kèo vui, mở menu là chọn trúng món ngon, lên ảnh là có tấm muốn đăng ngay và lướt đâu cũng bắt gặp thứ làm mình bật cười. Hôm nay cậu cứ giữ đúng phong độ: vui thì cười lớn, thích thì chốt, không thích thì bỏ qua — 20/10 này phải thật đúng chất cậu ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-23",
    "name": "Nguyễn Tường Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Tường Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Tường Mai hôm nay xinh theo kiểu không cần cố mà vẫn nổi nha! Chúc cậu gặp đúng ánh sáng, đúng góc chụp, đúng outfit và đúng người biết khen thật có tâm. Quà nhận được phải khiến cậu “ồ” một tiếng, còn cuộc trò chuyện phải vui tới mức quên cả thời gian. Hôm nay cứ tự tin tận hưởng, vì một ngày đáng yêu như thế thì chẳng cần lý do gì thêm ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-24",
    "name": "Nguyễn Thanh Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Thanh Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Mai hôm nay làm gì cũng có cảm giác “ok, quá ổn” nha! Chúc mọi thứ từ đồ ăn, ảnh chụp, tin nhắn tới mấy cuộc hẹn đều đúng mood, đúng lúc, đúng người. Chúc cậu có một chiếc story thật xinh, một trận cười thật lớn và một món quà nhìn phát biết ngay người tặng đã hiểu gu. Hôm nay cứ chill nhưng vẫn slay, quá hợp luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-25",
    "name": "Đỗ Hà My",
    "subject": "",
    "greeting": "Gửi Đỗ Hà My,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà My hôm nay tuyệt đối nói không với drama, chỉ nhận năng lượng vui thôi nha! Chúc timeline toàn ảnh đẹp, group chat toàn chuyện hài, đồ ăn toàn món ngon và quà toàn món khiến cậu thích ngay. Hôm nay cứ “main character” một chút cũng chẳng sao: bước đi thật tự tin, cười thật tươi, chụp vài tấm xịn và tận hưởng spotlight của riêng mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-26",
    "name": "Nguyễn Hồng Ngân",
    "subject": "",
    "greeting": "Gửi Nguyễn Hồng Ngân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hồng Ngân hôm nay có một chiếc aura sáng hơn bình thường một chút nha! Chúc mở quà là trúng gu, mở camera là có ảnh, mở tin nhắn là gặp lời chúc dễ thương. Đi đâu cũng cứ thoải mái, cười thật tươi và giữ nguyên cái thần thái khiến người khác nhìn một cái là nhận ra ngay. Hôm nay cứ vui theo kiểu rất riêng của cậu, không cần giống ai hết ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-27",
    "name": "Nguyễn Vũ Kim Ngân",
    "subject": "",
    "greeting": "Gửi Nguyễn Vũ Kim Ngân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Kim Ngân hôm nay “10 điểm không có nhưng” nha! Chúc mood cao, outfit ổn, ảnh đẹp, món ngon và mọi cuộc hẹn đều đúng vibe. Một ngày thật hợp gu thì phải có chút bất ngờ, chút tiếng cười và một khoảnh khắc khiến cậu muốn chụp lại ngay. Cứ tự tin tận hưởng đi, hôm nay thích gì thì chọn nấy, vui kiểu nào thì chơi kiểu đó ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-28",
    "name": "Đỗ Thảo Phương",
    "subject": "",
    "greeting": "Gửi Đỗ Thảo Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thảo Phương hôm nay nhìn phát là biết đang slay nha! Chúc cậu gặp đúng hội vui, đúng bài nhạc, đúng quán ngon và đúng chiếc góc sống ảo đỉnh nhất. Quà thì phải thật “cậu”, còn lời chúc phải làm cậu đọc xong bật cười. Hôm nay cứ bung mood thoải mái, nói chuyện hết mình, chụp ảnh thật xịn và tận hưởng một ngày 20/10 thật có chất ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-29",
    "name": "Nguyễn Mai Phương",
    "subject": "",
    "greeting": "Gửi Nguyễn Mai Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương hôm nay có một ngày vừa xinh vừa có chuyện để kể nha! Chúc cậu nhận được món quà nhìn là thấy “đúng mình”, có một pha bất ngờ đủ vui, một trận cười đủ lâu và vài tấm ảnh đủ xịn để giữ lại. Hôm nay cứ tự tin mà tận hưởng, không cần chỉnh màu cuộc sống quá nhiều đâu; mood đẹp rồi thì cứ thế mà vui ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-30",
    "name": "Vũ Mai Phương",
    "subject": "",
    "greeting": "Gửi Vũ Mai Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương hôm nay được quyền khó tính với niềm vui của mình nha: quà phải xịn, đồ ăn phải ngon, ảnh phải đẹp và người đi cùng phải vui tính! Chúc cậu có một ngày đúng gu tới từng chi tiết, gặp đúng tần số mình thích và cười nhiều tới mức quên mất đang định làm gì. Hôm nay cứ chốt mọi kèo đáng yêu, còn chuyện khác để tính sau ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-31",
    "name": "Vũ Uyên Phương",
    "subject": "",
    "greeting": "Gửi Vũ Uyên Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Uyên Phương có một ngày thật yên mà vẫn thật vui nha! Chúc cậu có một góc ngồi mình thích, một bài nhạc nghe mãi không chán, một món ăn vừa miệng và một cuộc trò chuyện không cần nói quá nhiều vẫn thấy thoải mái. Hôm nay cứ tận hưởng sự bình yên theo cách riêng, vui vì những điều nhỏ xíu và mỉm cười khi bất chợt thấy một khoảnh khắc thật đẹp ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-32",
    "name": "Nguyễn Thị Khánh Tâm",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Khánh Tâm,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh Tâm hôm nay đầu óc nhẹ tênh, tim vui vui và mọi thứ học hành đều “à, mình biết cái này” nha! Chúc gặp đúng câu hỏi, nhớ đúng công thức, làm bài thật mượt rồi còn có thời gian ăn ngon, nói chuyện và cười nữa. Hôm nay cứ thong thả một chút, không cần chạy theo nhịp của ai; học ổn, vui ổn, nghỉ ngơi cũng ổn luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-33",
    "name": "Đào Mai Phương Thảo",
    "subject": "",
    "greeting": "Gửi Đào Mai Phương Thảo,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương Thảo có một ngày thật dễ chịu để đầu óc được nghỉ một chút nha! Chúc cậu đọc gì cũng vào, làm gì cũng gọn, gặp câu khó thì tự nhiên nghĩ ra cách giải và xong việc còn đủ thời gian ngồi chill. Một món quà nhỏ, một lời chúc thật lòng, một bữa ăn ngon — gom lại thành một ngày vừa đủ vui, chẳng cần ồn ào vẫn đáng nhớ ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-34",
    "name": "Vũ Ngọc Cẩm Thư",
    "subject": "",
    "greeting": "Gửi Vũ Ngọc Cẩm Thư,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Cẩm Thư hôm nay có thật nhiều khoảnh khắc khiến cậu mỉm cười mà chẳng cần ai nhắc nha! Chúc việc cần làm được xử lý gọn, lúc cần tập trung thì đầu óc sáng, lúc nghỉ thì nghỉ thật thoải mái. Rồi nhớ dành chỗ cho mấy điều rất nhỏ nữa: một món ăn ngon, một bài hát hợp tai, một câu chuyện buồn cười và một buổi tối thật yên ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-35",
    "name": "Bùi Bảo Trâm",
    "subject": "",
    "greeting": "Gửi Bùi Bảo Trâm,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Bảo Trâm có một ngày thật vừa vặn với mình nha! Chúc cậu học xong không thấy căng, nghỉ mà không thấy áy náy, mở sách thì vào bài và đóng sách là thấy nhẹ đầu. Chúc bên cạnh có vài người nói chuyện hợp, vài món ăn mình thích và một chiếc hộp quà làm mình vui thật sự. Hôm nay cứ nhận lấy những điều đáng yêu, không cần phải khách sáo ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-36",
    "name": "Hoàng Quỳnh Trang",
    "subject": "",
    "greeting": "Gửi Hoàng Quỳnh Trang,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Quỳnh Trang hôm nay có một cái đầu thật tỉnh và một chiếc mood thật xinh nha! Chúc đọc tới đâu hiểu tới đó, làm bài tới đâu gọn tới đó, rồi tới lúc nghỉ thì cười thật thoải mái. Có thể hôm nay sẽ có rất nhiều thứ phải nghĩ, nhưng ít nhất hãy để một phần trong ngày dành cho đồ ngon, người vui và những chuyện nhỏ làm cậu bật cười ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-37",
    "name": "An Thanh Tú",
    "subject": "",
    "greeting": "Gửi An Thanh Tú,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Tú hôm nay mọi thứ bỗng nhiên “dễ” hơn một chút nha! Chúc câu hỏi gặp được phần mình nhớ, việc cần làm xử lý đâu ra đó, điện thoại mở lên có một tin nhắn dễ thương và bữa ăn cuối ngày ngon thật ngon. Hôm nay cứ giữ cho mình một khoảng nghỉ, ngồi yên cũng được, cười cũng được, chẳng cần phải lúc nào cũng bận rộn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-38",
    "name": "Nguyễn Bảo Vy",
    "subject": "",
    "greeting": "Gửi Nguyễn Bảo Vy,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Bảo Vy có một ngày thật vui nhưng vẫn giữ được chiếc nhịp riêng của mình nha! Chúc cậu làm việc gì cũng tập trung vừa đủ, nghỉ đúng lúc, gặp đúng người và có vài chuyện đáng yêu chen vào giữa những việc thường ngày. Một món quà nhỏ mở ra, một câu chuyện bất ngờ, một trận cười ngắn — gom lại thôi cũng đủ làm hôm nay khác đi rất nhiều rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-39",
    "name": "Trần Thị Hải Yến",
    "subject": "",
    "greeting": "Gửi Trần Thị Hải Yến,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hải Yến có một ngày thật nhẹ lòng nha! Chúc cậu được ngồi ở nơi mình thích, nghe đúng bài nhạc mình muốn nghe, ăn đúng món mình thèm và nói chuyện với người khiến mình thấy thoải mái. Chúc cả ngày có những khoảng rất yên nhưng không hề buồn, chỉ là bình thường thôi mà dễ chịu, rồi bất chợt có một chuyện nhỏ làm cậu cười thật tươi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-40",
    "name": "Nguyễn Trần Bảo Trân",
    "subject": "",
    "greeting": "Gửi Nguyễn Trần Bảo Trân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Bảo Trân hôm nay vừa học ổn vừa vui thật đã nha! Chúc những điều đang cần nhớ thì nhớ nhanh, những phần đang làm dở thì xử lý gọn, tới lúc cất sách lại có ngay một khoảng thật thoải mái cho bản thân. Chúc cậu có một món quà thật xinh, một bữa thật ngon và một buổi tối yên yên để kết thúc ngày bằng một nụ cười thật nhẹ ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  }
];
const teacher = {
  "id": "teacher",
  "name": "Cô Hằng",
  "subject": "Một lời chúc gửi cô",
  "greeting": "Thưa cô Hằng kính mến,",
  "paragraphs": [
    "Nhân ngày 20/10, chúng em cảm ơn cô vì đã luôn quan tâm và đồng hành cùng 10B4. ♡",
    "Những lời nhắc, những câu chuyện và cả những lúc cô cùng lớp trao đổi khiến những ngày ở lớp trở nên gần gũi hơn. Chúng em rất trân trọng những điều bình thường như vậy.",
    "Chúc cô luôn vui, thật nhiều sức khỏe và có thật nhiều ngày đến lớp nhẹ nhàng, nhiều tiếng cười. Mong cô lúc nào cũng giữ được sự nhiệt tình và những niềm vui rất riêng của mình. Chúc cô có một 20/10 thật vui và thật nhiều điều dễ thương ạ ♡"
  ],
  "sign": "Chúng em, 10B4 ♡",
  "teacher": true
};
